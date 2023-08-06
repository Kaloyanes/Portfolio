import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
