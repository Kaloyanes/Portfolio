import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
export class AllProjectsComponent { }
