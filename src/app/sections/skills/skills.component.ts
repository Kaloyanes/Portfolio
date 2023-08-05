import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  characterSkills: Skill[] = [
    new Skill("Problem Solving", 9),
    new Skill("Adaptability", 10),
    new Skill("Teamwork", 9),
    new Skill("Bulgarian", 10),
    new Skill("English", 8),
  ];

  programmingSkills: Skill[] = [
    new Skill("Git", 8, "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"),
    new Skill("Flutter", 10, "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"),
    new Skill("Dart", 10, "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"),
    new Skill("Firebase", 9, "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"),
    new Skill("C#", 10, "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"),
    new Skill("Javascript", 6.5, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 7, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("HTML", 6, "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"),
    new Skill("CSS", 7, "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"),
    new Skill("Python", 5.5, "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"),
  ];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      this.changeSliderColor();
    }, 0);
  }

  changeSliderColor() {
    var ranges = document.getElementsByClassName("slider");

    for (let i = 0; i < ranges.length; i++) {
      const range = ranges[i] as HTMLInputElement;



      const tempSliderValue = Number.parseFloat(range.value);
      const max = 10;

      const progress = (tempSliderValue / max) * 100;
      console.log(progress);

      range.style.background = `linear-gradient(to right, #7a7289 ${progress - 8}%, #ccc ${100 - progress}%)`;
    }
  }
}


