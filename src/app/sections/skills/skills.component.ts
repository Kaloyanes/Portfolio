import { Component } from '@angular/core';
import { Skill } from 'src/app/models/skill.type';
import { CommonModule, NgFor } from '@angular/common';
import gsap from 'gsap';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  standalone: true,
  imports: [NgFor, CommonModule]
})
export class SkillsComponent {


  frontendSkills: Skill[] = [
    new Skill("Angular", 8, "https://angular.io/assets/images/logos/angular/angular.svg"),
    new Skill("Javascript", 5.5, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 6, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("HTML", 6, "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"),
    new Skill("CSS", 6, "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"),
    new Skill("Git", 8, "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg"),

  ];

  backendSkills: Skill[] = [
    new Skill("C#", 9.5, "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png"),
    new Skill("Javascript", 5.5, "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"),
    new Skill("Typescript", 6, "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"),
    new Skill("Firebase", 9, "https://firebase.google.com/static/downloads/brand-guidelines/SVG/logo-logomark.svg"),
    new Skill("Python", 5.5, "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg"),

  ];

  mobileSkills: Skill[] = [
    new Skill("Flutter", 10, "https://storage.googleapis.com/cms-storage-bucket/4fd5520fe28ebf839174.svg"),
    new Skill("Dart", 10, "https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg"),
  ];



  ngOnInit(): void {
    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#skill-wrapper",
          start: "top center",
          end: "bottom center",
          scrub: 1,

        },
      });

      tl
        .fromTo("#skill-title", { opacity: 0, duration: 1, y: 300, ease: "power2.out" }, { opacity: 1, duration: 1, y: 0, ease: "power2.out" }, 0);

      tl
        .to(".skill-group", { opacity: 1, duration: 1, y: 0, ease: "power2.out" }, 0)
    }, 0);
  }
}


