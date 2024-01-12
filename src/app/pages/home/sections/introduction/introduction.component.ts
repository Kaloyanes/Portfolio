import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'introduction',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroductionComponent { }
