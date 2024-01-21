import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { Project } from '@models/project';
import { ProjectsService } from '@services/projects.service';

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

  constructor(public projectsService: ProjectsService) {
  }

  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.projectsService.GetProjects();
  }
}
