import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class SkillComponent {
  @Input({ required: true }) skill: Skill | undefined;


  calculateSkill(percentage: number) {
    if (percentage < 50) {
      return "Novice";
    }

    if (percentage >= 50 && percentage <= 80) {
      return "Advanced";
    }

    return "Expert";
  }
}
