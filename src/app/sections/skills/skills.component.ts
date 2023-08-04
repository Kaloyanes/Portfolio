import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  characterSkills: Skill[] = [
    new Skill("Problem Solving", 4),
    new Skill("Adaptability", 5),
    new Skill("Teamwork", 5),
    new Skill("Bulgarian", 5),
    new Skill("English", 4),
  ];

  programmingSkills: Skill[] = [
    new Skill("Git", 5, "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"),
    new Skill("Flutter", 5, "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"),
    new Skill("Dart", 5, "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"),
    new Skill("Firebase", 4, "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"),
    new Skill("C#", 5, "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"),
    new Skill("Javascript", 4, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 4, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("Python", 3, "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"),
  ];
}


