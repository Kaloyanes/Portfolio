import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '@models/project';

@Component({
  selector: 'project-showcase-card',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './project-showcase-card.component.html',
  styleUrl: './project-showcase-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectShowcaseCardComponent {
  project = input.required<Project>();
  isEven = input<boolean>();

  GoToThisProject() {
    window.location.href = `/project/${this.project().id}`;
  }
}
