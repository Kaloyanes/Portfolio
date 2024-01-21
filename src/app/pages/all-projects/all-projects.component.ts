import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProjectsService } from '@services/projects.service';

@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProjectsComponent {
  constructor(public ProjectsService: ProjectsService) { }

  async ngOnInit(): Promise<void> {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    await this.ProjectsService.GetProjects();
  }
}
