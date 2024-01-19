import { Injectable, WritableSignal, computed, signal } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Project } from '@models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: WritableSignal<Project[]> = signal([]);
  sortedProjects = computed(() => {
    return this.getProjectsForSection(this.projects());
  });

  constructor(public firestore: Firestore) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProjects();
  }

  getProjects() {
    console.log("getProjects");
    collectionData(collection(this.firestore, 'projects'), { idField: 'id' }).subscribe((data) => {
      this.projects.set((data as Project[]));
      console.log(this.projects());
    });
  }

  getProjectsForSection(projects: Project[]) {
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
