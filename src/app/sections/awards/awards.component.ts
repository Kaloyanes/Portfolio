import { Component } from '@angular/core';
import { Award } from 'src/app/models/award.type';
import { NgFor, NgClass, NgIf, NgOptimizedImage } from '@angular/common';
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
      imageUrl: "../../../assets/robodays.webp",
    },
    {
      title: "1st place at BurgasBlueS 2023, hackathon hosted by University prof. dr.Asen Zlatarov ",
      description: "Me and my friend formed a successful team that placed at first position in the junior project category, surpassing numerous competing teamsemerging as the ultimate winners.",
      date: "06/2023",
      location: "Burgas",
      imageUrl: "../../../assets/burgasblues.webp",
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
      imageUrl: "../../../assets/vyarnataposoka.webp",
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
      const documents = [
        document.querySelector("#awardTitle"),
        document.querySelector("#awardWrapper"),
      ];

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#awardWrapper",
          start: "-300 center",
          end: "350 top",
          scrub: 1,
          markers: true,
        },


      });

      tl.fromTo("#awardTitle", { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 }, 0);
      tl.fromTo(".awards", { opacity: 0, y: 300 }, { opacity: 1, y: 0, duration: 1 }, 0);

      const awards = gsap.utils.toArray('.award');

      function fadeIn(targets: HTMLElement[]) {
        targets.forEach((element, i) => {

          gsap.fromTo(element, {
            x: i % 2 == 0 ? -1000 : 1000,
            opacity: 0,
          }, {
            opacity: 1,
            x: 0,
            duration: 1,

            ease: "power2.out",

          });
        });
      }

      let observer = new IntersectionObserver(function (entries, self) {
        let targets = entries.map(entry => {

          if (entry.isIntersecting) {
            self.unobserve(entry.target);
            return entry.target;
          }

          return null;
        });

        // Call our animation function
        fadeIn(targets as HTMLElement[]);
      }, { threshold: 0.1 });

      document.querySelectorAll('.award').forEach(box => {
        observer.observe(box);
      });






    }, 0);
  }


}
