import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Project } from '@models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: WritableSignal<Project[]> = signal([]);
  sortedProjects = computed(() => {
    return this.GetProjectsForSection(this.projects());
  });

  constructor(public firestore: Firestore) { }

  ngOnInit(): void {


    this.GetProjects();
  }

  GetProjects() {
    if (this.projects().length > 0) return;

    console.log("getProjects");
    collectionData(collection(this.firestore, 'projects'), { idField: 'id' }).subscribe((data) => {
      this.projects.set((data as Project[]));
      console.log(this.projects());
    });
  }

  async GetProjectById(id: string) {
    if (this.projects().length == 0) {

      await this.GetProjects();
    }



    let result = this.projects().find(x => x.id == id);

    console.log(result);

    return result;
  }

  GetProjectsForSection(projects: Project[]) {
    return projects.filter(x => x.top).sort((a, b) => {
      if (a.position >= b.position) {
        return 1;
      }
      if (a.position < b.position) {
        return -1;
      }
      return 0;
    }).slice(0, 3);
  }

  GenerateSlug(projectName: string): string {
    return projectName.toLowerCase().trim().replace(" ", "-");
  }

  async CreateNewProject(project: Project) {
    let docReference = doc(this.firestore, "projects", project.id);

    await setDoc(
      docReference,
      project
    );

  }
}
