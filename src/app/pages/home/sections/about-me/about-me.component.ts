import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { easeOutCubic } from '@utils/Easings';
import { animate, stagger } from 'motion';
import SplitType from 'split-type';

@Component({
  selector: 'about-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutMeComponent {

}
