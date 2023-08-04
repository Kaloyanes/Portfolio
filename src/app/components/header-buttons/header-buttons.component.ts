import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {

  @HostListener('wheel')
  isScrolledIntoView() {
    var sections = document.querySelectorAll(".section");

    sections.forEach(el => {
      if (el) {
        const rect = el.getBoundingClientRect();
        const topShown = rect.top >= 0;
        const bottomShown = rect.bottom <= window.innerHeight;
        // isTestDivScrolledIntoView = topShown && bottomShown;

        if (topShown && bottomShown) {
          var button = document.querySelector(`#${el.id}btn`)
          this.makeAllButtonsInactive();
          button!.classList.add('active');
        }
      }
    });
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
    this.makeAllButtonsInactive();

    var selected = event.target as Element;
    if (selected.textContent == null) return;

    document.getElementById(selected.textContent.replace(" ", "-").toLowerCase().trim())?.scrollIntoView({
      behavior: 'smooth', block: 'center',
    })

    selected.classList.add("active");
    console.log(selected.textContent);



  }
}
