import { state, style, trigger } from '@angular/animations';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AppComponent {
  title = 'Portfolio';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var ds = document.querySelector('.header');

    if (!ds) return;

    const observer = new IntersectionObserver(
      ([e]) => e.target.toggleAttribute('stuck', e.intersectionRatio < 1),
      { threshold: [1] }
    );


    observer.observe(ds);
  }

  makeActive(event: Event) {
    var buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.replace("active", "inactive");
    }



    (event.target as Element).classList.add("active");
  }
}
