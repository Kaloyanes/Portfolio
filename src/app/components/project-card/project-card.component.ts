import { Component, Input } from '@angular/core';
import { Project } from '../../models/project';
import { animate, timeline, stagger } from 'motion';
import { easeOutBack, easeOutCubic } from '@utils/Easings';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input() project: Project | undefined;


}
