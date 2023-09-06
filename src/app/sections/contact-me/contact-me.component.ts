import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Social } from 'src/app/models/social.type';
import { NgFor } from '@angular/common';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  standalone: true,
  imports: [NgFor, MatIconModule,],
})
export class ContactMeComponent {
  socials: Social[] = [

    {
      name: "Github",
      imageUrl: "/assets/logos/github.svg",
      username: "KaloyanStoyanov06",
      link: "https://github.com/KaloyanStoyanov06",
    },
    {
      name: "LinkedIn",
      imageUrl: "/assets/logos/linkedin.svg",
      username: "Kaloyan Stoyanov",
      link: "https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/",
    },
    {
      name: "Facebook",
      imageUrl: "/assets/logos/facebook.svg",
      username: "Калоян Стоянов",
      link: "https://www.facebook.com/kalstst/",
    },

  ]

  firestore: Firestore = inject(Firestore);

  openLink(link: string) {
    window.open(link, '_blank');
  }

  launchMail() {
    window.open("mailto:kaloyangfx@gmail.com");
  }

  call() {
    window.open("tel:+359879900137");
  }
}
