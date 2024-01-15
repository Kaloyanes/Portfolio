import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'education',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent { }
