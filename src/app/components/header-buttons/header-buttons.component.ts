import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {

  constructor(private titleService: Title) { }

  @HostListener("window:scroll")
  onScroll() {
    var section = this.getCurrentVisibleSection();
    console.log(section);
    if (section == null) return;
    this.makeAllButtonsInactive();

    var buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i].id == (section + "btn"))
        buttons[i].classList.add("active")
    }

    this.titleService.setTitle("Kaloyan Stoyanov - " + this.capitalizeFirstLetter(section));
  }
  capitalizeFirstLetter(input: string): string {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }


  getCurrentVisibleSection(): string | null {
    const sections = document.querySelectorAll(".section");
    const viewportHeight = window.innerHeight;


    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;

      // Check if the section is at least 50% visible in the viewport
      if (sectionTop < viewportHeight / 2 && sectionBottom > viewportHeight / 2) {
        return section.getAttribute("id"); // Assuming you have set an "id" attribute for each section
      }
    }

    return null; // If no section is found to be at least 50% visible in the viewport
  }

  makeAllButtonsInactive() {
    var buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.replace("active", "inactive");

      setTimeout(() => {
        buttons[i].classList.remove("inactive");
      }, 600);
    }
  }

  makeActive(event: Event) {

    var selected = event.target as Element;
    if (selected.textContent == null) return;

    var target = document.getElementById(selected.textContent.replace(" ", "-").toLowerCase().trim());

    window.scrollTo({
      behavior: 'smooth',
      top: target!.offsetTop - 70
    })




  }
}
