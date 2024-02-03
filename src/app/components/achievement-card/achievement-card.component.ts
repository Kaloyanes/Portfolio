import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Achievement } from '@models/achievement';

@Component({
  selector: 'achievement-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './achievement-card.component.html',
  styleUrl: './achievement-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementCardComponent {
  @Input({
    required: true,
  }) achievement: Achievement | undefined;
}
