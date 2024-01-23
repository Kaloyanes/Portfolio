import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, WritableSignal, signal } from '@angular/core';
import { collection, collectionData, getFirestore } from '@angular/fire/firestore';
import { Achievement } from '@models/achievement';
import { HomeComponent } from '../../home.component';
import { animate, stagger } from 'motion';

@Component({
  selector: 'achievements',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AchievementsComponent {


  achievemnts: Achievement[] = [
    {
      title: "1st place at ROBO DAYS'23",
      description:
        'Working together with a talented classmate, our team managed to clinch the top spot in the software project category, leaving other teams behind.',
      date: '04/2023',
      location: 'Sofia',
      imageUrl: '/robodays.webp'
    },
    {
      title:
        '1st place at BurgasBlueS 2023',
      description:
        'Me and my friend formed a successful team that placed at first position in the junior project category, surpassing numerous competing teams emerging as the ultimate winners.',
      date: '06/2023',
      location: 'Burgas',
      imageUrl: '/burgasblues.webp'
    },
    {
      title:
        '7th place at the National Competition of IT',
      description:
        'In the regional phase, I achieved an impressive score of 93 out of 100. Moving on to the national phase, I performed exceptionally well, securing the 3rd place out of 30 participants in the test with a score of 89 out of 100. Additionally, in the presentation component of the national phase, I attained a commendable score of 77 out of 100.',
      date: '04/2023',
      location: 'Shumen',
      imageUrl: '/noit.png'
    },
    {
      title: 'Diploma Vyarnata posoka',
      description:
        "I was honored with the prestigious 'Vyarnata Posoka' diploma, awarded for my exceptional performance in the National Olympiad in Information Technology, where I secured an impressive 7th place in the 8-10th class age category.",
      date: '06/2021',
      location: 'Burgas',
      imageUrl: '/vyarnataposoka.webp'
    },
    {
      title: '2nd place at 6-th Regional IT Competition',
      description:
        "I attained the '2nd place' at the 6th Regional IT Competition in Burgas. The competition consisted of both a theoretical and practical section. I achieved a score of 98 out of 100.",
      date: '06/2021',
      location: 'Burgas',
      imageUrl: undefined
    }
  ]
  constructor(public homeComponent: HomeComponent) { }

  detailAchievement(index: number) {
    this.homeComponent.showAchievementDetails(this.achievemnts[index]);
  }
}
