import { Component } from '@angular/core';
import { signal } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

import type { Project } from '../../../../models/project';
import { ProjectCardComponent } from "../../../../components/project-card/project-card.component";

@Component({
  selector: 'projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
  imports: [ProjectCardComponent]
})
export class ProjectsComponent {
  projects = signal<Project[]>([]);

  constructor(private firestore: Firestore) { }

  async ngOnInit() {
    collectionData(collection(this.firestore, 'projects')).subscribe((data) => {
      this.projects.set(data as Project[]);
    });
  }
}
