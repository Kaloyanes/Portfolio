import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { Project } from '@models/project';

@Component({
  selector: 'projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects: WritableSignal<Project[]> = signal([]);

  ngOnInit(): void {
    this.getProjectsFromFireStore();
  }

  getProjectsFromFireStore() {
    var firestore = getFirestore();

    collectionData(collection(firestore, 'projects'), { idField: 'id' }).subscribe((data) => {
      this.projects.set((data as Project[]).filter(el => el.top).sort((a, b) => {
        if (a.position >= b.position) {
          return 1;
        }
        if (a.position < b.position) {
          return -1;
        }
        return 0;
      }).slice(0, 3));
      console.log(this.projects);
    });
  }
}
