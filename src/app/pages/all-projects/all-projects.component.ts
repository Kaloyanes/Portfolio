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


  GenerateRandomNumberFlex(max: number): number {
    return Math.floor(Math.random() * max);
  }

  GoToThisProject(id: string) {
    window.location.href = `/project/${id}`;
  }
}
