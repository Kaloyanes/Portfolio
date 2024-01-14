import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Project } from '@models/project';

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
  projects: Project[] = [
    {
      name: 'ReportR',
      description: 'Mobile Application for users to report incidents.',

    }
    , {
      name: 'ReportR',
      description: 'Mobile Application for users to report incidents.',
    }
  ];
}
