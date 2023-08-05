import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input({ required: true }) skill: Skill | undefined;

}
