import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, Renderer2, ViewChild } from '@angular/core';
import { Project } from 'src/app/models/project.type';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;

  details() {
    window.open(this.project!.github, "_blank");

  }
}
