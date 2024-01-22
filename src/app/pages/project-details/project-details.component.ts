import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { Project } from '@models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '@services/projects.service';

@Component({
  selector: 'project-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {
  project = computed(() => {
    return this.ProjectsService.projects().find(x => x.id == this.route.snapshot.paramMap.get('id'));
  })

  constructor(private route: ActivatedRoute, private ProjectsService: ProjectsService) { }

  async ngOnInit() {
    if (this.ProjectsService.projects().length === 0) {
      await this.ProjectsService.GetProjects();
    }
  }
}
