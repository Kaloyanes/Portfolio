import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Social } from 'src/app/models/social.type';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-contact-me',
    templateUrl: './contact-me.component.html',
    styleUrls: ['./contact-me.component.scss'],
    standalone: true,
    imports: [NgFor, MatIconModule],
})
export class ContactMeComponent {
  socials: Social[] = [

    {
      name: "Github",
      imageUrl: "./../../../assets/logos/github/github-mark-white.svg",
      username: "KaloyanStoyanov06",
      link: "https://github.com/KaloyanStoyanov06",
    },
    {
      name: "LinkedIn",
      imageUrl: "./../../../assets/logos/github/github-mark-white.svg",
      username: "Kaloyan Stoyanov",
      link: "https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/",
    },
    {
      name: "Facebook",
      imageUrl: "./../../../assets/logos/github/github-mark-white.svg",
      username: "Калоян Стоянов",
      link: "https://www.facebook.com/kalstst/",
    },
    {
      name: "Instagram",
      imageUrl: "./../../../assets/logos/github/github-mark-white.svg",
      username: "kaloyanes",
      link: "https://www.instagram.com/kaloyanes/",
    },
    {
      name: "Twitter/X",
      imageUrl: "./../../../assets/logos/github/github-mark-white.svg",
      username: "denoic06",
      link: "https://twitter.com/denoic06",
    },
  ]

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
