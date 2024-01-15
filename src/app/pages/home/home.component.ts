import { Component } from '@angular/core';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactMeComponent } from "./sections/contact-me/contact-me.component";
import { EducationComponent } from "./sections/education/education.component";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [AboutMeComponent, ProjectsComponent, ContactMeComponent, EducationComponent]
})
export class HomeComponent {
  ngOnInit(): void {
    document.body.addEventListener('pointermove', (e) => {
      document.documentElement.style.setProperty('--x', Math.round(e.clientX).toString());
      document.documentElement.style.setProperty('--y', Math.round(e.clientY).toString());
    });
  }


}
