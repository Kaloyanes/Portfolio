import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Award } from 'src/app/models/award.type';

import gsap from 'gsap';

@Component({
  selector: 'app-award-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss']
})
export class AwardCardComponent {
  @Input() award: Award | undefined;
  @Input() reversed: boolean = false;

  name: string = "";

  constructor() {

    setTimeout(() => {
      this.name = this.award?.description.substring(0, 15).replace(/\s/g, '') ?? "kys";
      console.log(this.name);
    }, 0);


  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    setTimeout(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: `#${this.name}`,
          start: "-300 center",
          end: "center center",
          markers: false,
          scrub: 1,
        },
      });

      tl.fromTo(`#content-${this.name}`, { opacity: 0, x: this.reversed ? 500 : -500 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, 0);
      if (this.award?.imageUrl) {

        tl.fromTo(`#img-${this.name}`, { opacity: 0, x: this.reversed ? -500 : 500 }, { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, 0);
      }
    }, 0)
  }
}
