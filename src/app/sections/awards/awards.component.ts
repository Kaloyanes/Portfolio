import { Component } from '@angular/core';
import { Award } from 'src/app/models/award.type';
import { NgFor, NgClass, NgIf } from '@angular/common';
import gsap from 'gsap';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
  standalone: true,
  imports: [NgFor, NgClass, NgIf]
})
export class AwardsComponent {
  awards: Award[] = [
    {
      title: "1st place at ROBO DAYS'23, competition hosted by Technical University Sofia",
      description: "Working together with a talented classmate, our team managed to clinch the top spot in the software project category, leaving other teams behind.",
      date: "04/2023",
      location: "Sofia",
      imageUrl: "../../../assets/robodays.jpg",
    },
    {
      title: "1st place at BurgasBlueS 2023, hackathon hosted by University prof. dr.Asen Zlatarov ",
      description: "Me and my friend formed a successful team that placed at first position in the junior project category, surpassing numerous competing teamsemerging as the ultimate winners.",
      date: "06/2023",
      location: "Burgas",
      imageUrl: "../../../assets/burgasblues.jpg",
    },
    {
      title: " Secured 7th place at the National Competition of IT, comprising regional and national",
      description: "In the regional phase, I achieved an impressive score of 93 out of 100. Moving on to the national phase, I performed exceptionally well, securing the 3rd place out of 30 participants in the test with a score of 89 out of 100. Additionally, in the presentation component of the national phase, I attained a commendable score of 77 out of 100.",
      date: "04/2023",
      location: "Shumen",
      imageUrl: "../../../assets/noit.png",
    },
    {
      title: "Diploma Vyarnata posoka",
      description: "I was honored with the prestigious 'Vyarnata Posoka' diploma, awarded for my exceptional performance in the National Olympiad in Information Technology, where I secured an impressive 7th place in the 8-10th class age category.",
      date: "06/2021",
      location: "Burgas",
      imageUrl: "../../../assets/vyarnataposoka.jpg",
    },
    {
      title: "2nd place at 6-th Regional IT Competition",
      description: "I attained the '2nd place' at the 6th Regional IT Competition in Burgas. The competition consisted of both a theoretical and practical section. I achieved a score of 98 out of 100.",
      date: "06/2021",
      location: "Burgas",
      imageUrl: undefined,
    },


  ]

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setTimeout(() => {
      const awards = gsap.utils.toArray('.award');

      let scrollTween = gsap.to(awards, {
        xPercent: -100 * (awards.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '.awards',
          pin: true,
          scrub: 1,

          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => '+=' + (document.querySelector('.awards') as HTMLElement).offsetWidth
          // end: '+=' + awards.length * 110,

        },
      });





    }, 0);
  }
}
