import { Component } from '@angular/core';
import { HeaderButtonsComponent } from '../header-buttons/header-buttons.component';

@Component({
  selector: 'app-scroll-to-top-fab',
  templateUrl: './scroll-to-top-fab.component.html',
  styleUrls: ['./scroll-to-top-fab.component.scss'],
  providers: [
    HeaderButtonsComponent,
  ]
})
export class ScrollToTopFabComponent {
  constructor(private buttons: HeaderButtonsComponent) { }

  scrollToTop() {
    window.scrollTo({
      top: 0, behavior: 'smooth'
    });

  }
}
