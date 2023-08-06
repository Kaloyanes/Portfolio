import { Component } from '@angular/core';
import { Award } from 'src/app/models/award.type';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
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
      title: "2nd place at 6-th Regional IT Competition",
      description: "I attained the '2nd place' at the 6th Regional IT Competition in Burgas. The competition consisted of both a theoretical and practical section. I achieved a score of 98 out of 100.",
      date: "06/2021",
      location: "Sofia",
      imageUrl: undefined,
    },
    {
      title: "Diploma Vyarnata posoka",
      description: "I was honored with the prestigious 'Vyarnata Posoka' diploma, awarded for my exceptional performance in the National Olympiad in Information Technology, where I secured an impressive 7th place in the 8-10th class age category.",
      date: "06/2021",
      location: "Burgas",
      imageUrl: "../../../assets/vyarnataposoka.jpg",
    },

  ]
}
