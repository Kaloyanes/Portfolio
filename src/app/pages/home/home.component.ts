import { Component } from '@angular/core';
import { ProjectsComponent } from "./sections/projects/projects.component";
import { IntroductionComponent } from "../../components/introduction/introduction.component";

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ProjectsComponent, IntroductionComponent]
})
export class HomeComponent {

}
