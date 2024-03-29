import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.handleDarkmode(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener("change", this.handleDarkmode);
  }


  handleDarkmode(e: any) {
    const darkModeOn = e.matches;
    const favicon = document.querySelector('link[rel="icon"]');


    if (!favicon) {
      return;
    }

    if (darkModeOn) {
      favicon.setAttribute('href', 'assets/light-favicon.png');
    } else {
      favicon.setAttribute('href', 'assets/dark-favicon.png');
    }
  }
}

