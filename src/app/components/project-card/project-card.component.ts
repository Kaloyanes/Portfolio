import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('1000ms ease-in-out')),
    ]),
  ],
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;


  print() {
    console.log("HELLO WORLD");

  }

  details() {
    window.location.href = this.project!.github;
  }

  isExpanded = false;

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }

  open() {
    // (document.querySelector(".content") as HTMLElement).style.visibility = "visible";
  }

  close() {

    // (document.querySelector(".content") as HTMLElement).style.visibility = "hidden";
  }
}
