import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;


  print() {
    console.log("HELLO WORLD");

  }

  details() {
    window.location.href = this.project!.github;
  }

  open() {
    (document.querySelector(".content") as HTMLElement).style.visibility = "visible";
  }

  close() {
    (document.querySelector(".content") as HTMLElement).style.visibility = "hidden";
  }
}
