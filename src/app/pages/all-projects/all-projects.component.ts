import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ProjectShowcaseCardComponent } from '@components/project-showcase-card/project-showcase-card.component';
import { Project } from '@models/project';
import { ProjectsService } from '@services/projects.service';
import { animate, stagger } from 'motion';


@Component({
  selector: 'all-projects',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ProjectShowcaseCardComponent,
  ],
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllProjectsComponent {
  log(_t27: Project) {
    console.log(_t27);
  }
  constructor(public projectsService: ProjectsService) { }

  x = computed(() => {
    if (this.sorted().length > 0) {
      this.animateProjects();
    }
  })



  sorted = computed(() => {
    return this.projectsService.projects().sort((a, b) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    }).sort((a, b) => {
      if (a.top && !b.top) return -1;
      if (!a.top && b.top) return 1;
      return 0;
    });
  });

  animateProjects() {
    animate('.cell', {
      y: ['100%', 0],
      opacity: [0, 1],
      scale: [0.8, 1],
    }, {
      delay: stagger(0.1),
      duration: 0.5,
    });
  }

  lastChosenImage: number = -1;

  GenerateRandomNumberFlex(max: number): number {
    let generated = Math.floor(Math.random() * max);

    if (this.lastChosenImage == generated) {
      return this.GenerateRandomNumberFlex(max);
    }

    this.lastChosenImage = generated;
    return generated;
  }


}
