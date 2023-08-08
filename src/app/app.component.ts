import { state, style, trigger } from '@angular/animations';
import { Component, HostListener, Renderer2, ViewEncapsulation } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

  constructor(private renderer: Renderer2) {
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
