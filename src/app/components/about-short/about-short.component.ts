import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import gsap from 'gsap';

@Component({
  selector: 'app-about-short',
  templateUrl: './about-short.component.html',
  styleUrls: ['./about-short.component.scss'],
  standalone: true,
  imports: [NgOptimizedImage, MatIconModule]
})
export class AboutShortComponent {
  ngOnInit() {

  }
}
