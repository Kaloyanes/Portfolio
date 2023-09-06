import { Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";
import gsap from 'gsap';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class EducationComponent {

  ngOnInit(): void {
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".wrapper",
          start: "top center",
          end: "+=500",
          scrub: 1,
        }
      })


      tl.fromTo("#educatTitle", { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1, });
      tl.fromTo(".img1", { opacity: 0, x: -1000 }, { opacity: 1, x: 0, duration: 1 }, 0);
      tl.fromTo(".img2", { opacity: 0, x: 1000 }, { opacity: 1, x: 0, duration: 1 }, 0);
    }, 0);
  }
}
