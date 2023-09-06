import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.type';
import { CommonModule, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import gsap from 'gsap';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  standalone: true,
  imports: [MatExpansionModule, NgIf, CommonModule],
})
export class ProjectCardComponent {

  @Input() project: Project | undefined;
  name: string = "";

  constructor() {

    setTimeout(() => {

      this.name = this.project?.name.replace(/\s/g, '') ?? "kys";
    }, 0);
  }



  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${this.name}`,
          start: "-200 center",
          end: "+=700",
          markers: true,
          scrub: true,

        },

      });

      tl.fromTo(`#logo-${this.name}`, { opacity: 0, x: -500 }, { opacity: 1, x: 0, duration: 1, ease: "sine.out" }, 0);
      tl.fromTo(`#content-${this.name}`, { opacity: 0, y: 500 }, { opacity: 1, y: 0, duration: 1, ease: "sine.out" }, 0);

      // get images and make a staggered effect

      let imagesDiv = document.getElementById(`images-${this.name}`);
      let images = imagesDiv!.getElementsByClassName("img");
      console.log(imagesDiv);

      console.log(images)
      tl.fromTo(images, { stagger: 5, x: 500, y: 250, opacity: 0, ease: "sine.out" }, { x: 0, y: 0, opacity: 1, duration: 1 }, 0);

    }, 0);
  }
}
