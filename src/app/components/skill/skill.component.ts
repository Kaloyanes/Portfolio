import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  @Input({ required: true }) skill: Skill | undefined;

  ngOnInit(): void {
    setTimeout(() => {
      this.changeSliderColor();
    }, 100);
  }

  changeSliderColor() {
    var ranges = document.getElementsByClassName("slider");
    console.log(`${this.skill!.name.toLowerCase()}`);

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i] as HTMLInputElement;



      const tempSliderValue = Number.parseInt(range.value);
      const max = 5;

      const progress = (tempSliderValue / max) * 100;
      console.log(progress);

      range.style.background = `linear-gradient(to right, #7a7289 ${progress - 8}%, #ccc ${100 - progress}%)`;
    }
  }
}
