import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, computed, signal } from '@angular/core';
import { Project } from '@models/project';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '@services/projects.service';
import { Meta, Title } from '@angular/platform-browser';
import { stagger, timeline } from 'motion';

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


  constructor(private route: ActivatedRoute, private ProjectsService: ProjectsService, private titleService: Title, private meta: Meta) { }

  goToGithub() {
    window.open(this.project()!.link, "_blank");
  }

  project = computed(() => {

    var project = this.ProjectsService.projects().find((x: Project) => x.id == this.route.snapshot.paramMap.get('id'));
    if (!project) return undefined;

    this.titleService.setTitle(this.GenerateTitle(project!.name));
    this.meta.updateTag({ name: 'description', content: `Project: ${project.name}, made by Kaloyan Stoyanov or Kaloyanes, with ${project.technologies.map(x => x + " ")}${project.problem} ${project.solution} ${project.result}` });

    project.technologies = project.technologies.map((x: string) => x.toLowerCase());
    return project;
  })

  x = computed(() => {
    if (this.project()) {
      this.animate();
    }
  });


  private GenerateTitle(title: string): string {
    if (title.trim() == "") return "Kaloyanes";

    return `Kaloyanes - ${title}`
  }

  async ngOnInit() {

    if (this.ProjectsService.projects().length === 0) {
      await this.ProjectsService.GetProjects();
    }


  }

  animate() {
    timeline([
      [
        "#projectName", {
          opacity: [0, 1],
          y: ['-55%', 0],
        }, {
          duration: 0.5,
        }
      ],
      [
        ".projectInfo", {
          opacity: [0, 1],
          x: ['-70%', 0],
        }, {
          duration: 0.5,
          delay: stagger(0.2)
        }
      ],
      [
        "#projectImage", {
          opacity: [0, 1],
          x: ['100%', 0],
        }, {
          duration: 0.5,
          at: "<"
        }
      ]
    ])
  }

}
