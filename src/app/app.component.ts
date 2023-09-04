import { Component, Renderer2, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as LocomotiveScroll from 'locomotive-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private renderer: Renderer2) {
    gsap.registerPlugin(ScrollTrigger);

    this.darkOrWhiteFavicon();
  }

  private darkOrWhiteFavicon() {
    // Subscribe to dark mode changes
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.updateFavicon(true);
    } else {
      this.updateFavicon(false);
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      // const newColorScheme = event.matches ? "dark" : "light";
      console.log(event.matches);

      this.updateFavicon(event.matches);
    });
  }

  private updateFavicon(isDarkMode: boolean) {
    const faviconLink = document.getElementById('faviconLink') as HTMLLinkElement;
    if (faviconLink) {
      // Set the new favicon based on the dark mode
      const newFaviconPath = !isDarkMode ? 'assets/dark-favicon.png' : 'assets/light-favicon.png';
      this.renderer.setAttribute(faviconLink, 'href', newFaviconPath);
    }
  }

}
