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
  ngAfterViewInit(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // var lines = new SplitType('.about-me > h1, .about-me-text > p, p > strong').lines;

    // if (lines == null) return;

    // animate(lines, {
    //   y: [100, 0],
    //   scale: [0, 1],
    //   opacity: [0, 1],
    // }, {
    //   delay: stagger(0.1, { from: 'first' }),
    //   duration: 0.5,
    //   easing: easeOutCubic,
    // });
  }
}
