import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { Project } from '@models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '@services/projects.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'project-details',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsComponent {

  project = computed(() => {

    var project = this.ProjectsService.projects().find(x => x.id == this.route.snapshot.paramMap.get('id'));
    if (!project) return undefined;

    this.titleService.setTitle(this.GenerateTitle(project!.name));

    project.technologies = project.technologies.map(x => x.toLowerCase());
    return project;
  })

  constructor(private route: ActivatedRoute, private ProjectsService: ProjectsService, private titleService: Title) { }

  private GenerateTitle(title: string): string {
    if (title.trim() == "") return "Kaloyanes";

    return `Kaloyanes - ${title}`
  }

  async ngOnInit() {

    if (this.ProjectsService.projects().length === 0) {
      await this.ProjectsService.GetProjects();
    }


  }
}
