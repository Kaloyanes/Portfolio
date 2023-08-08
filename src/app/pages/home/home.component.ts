import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ScrollToTopFabComponent } from '../../components/scroll-to-top-fab/scroll-to-top-fab.component';
import { ContactMeComponent } from '../../sections/contact-me/contact-me.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { AwardsComponent } from '../../sections/awards/awards.component';
import { SkillsComponent } from '../../sections/skills/skills.component';
import { EducationComponent } from '../../sections/education/education.component';
import { HeaderButtonsComponent } from '../../components/header-buttons/header-buttons.component';
import { AboutShortComponent } from '../../components/about-short/about-short.component';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [TitleComponent, AboutShortComponent, HeaderButtonsComponent, EducationComponent, SkillsComponent, AwardsComponent, ProjectsComponent, ContactMeComponent, ScrollToTopFabComponent]
})
export class HomeComponent {
  title = 'Portfolio 2';
  constructor(private titleService: Title) { }





  makeAllImagesClickable() {
    var dialog = document.getElementsByClassName("imageviewer")[0] as HTMLElement;
    var images = document.querySelectorAll("image[clickable]");

    console.log(images);

    if (!dialog) return;

    images.forEach(el =>
      el.addEventListener("click", function (ev) {
        console.log("clicked an image")
        console.log(ev);
        var dialog = document.getElementsByClassName("imageviewer")[0] as HTMLElement;
      }));

    dialog.style.visibility = "visible";

    document.body.style.overflowY = "hidden";
  }

  closeDialog() {
    var dialog = document.getElementsByClassName("imageviewer")[0] as HTMLElement;

    if (!dialog) return;

    dialog.style.visibility = "hidden";

    document.body.style.overflowY = "auto";
  }
}
