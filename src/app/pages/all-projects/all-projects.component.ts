import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { ProjectsService } from '@services/projects.service';
import { animate, stagger } from 'motion';

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
      top: [-100, `${this.GenerateRandomNumberFlex(50) * 10}%`],
      left: [-100, `${this.GenerateRandomNumberFlex(50) * 10}%`],
      width: [0, '100%'],
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

  GoToThisProject(id: string) {
    window.location.href = `/project/${id}`;
  }
}
