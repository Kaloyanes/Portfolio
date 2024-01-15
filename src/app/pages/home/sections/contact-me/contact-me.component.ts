import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Social } from '@models/social';

@Component({
  selector: 'contact-me',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactMeComponent {
  socials: Social[] = [
    {
      url: "https://www.linkedin.com/in/kaloyan-stoyanov-ba2799205/",
      icon: "linkedin",
      name: "LinkedIn"
    },
    {
      url: "https://www.facebook.com/kalstst/",
      icon: "facebook",
      name: "Facebook"
    },
    {
      url: "https://www.instagram.com/kaloyanes/",
      icon: "instagram",
      name: "Instagram"
    },
    {
      url: "https://www.github.com/KaloyanStoyanov06",
      icon: "github",
      name: "GitHub"
    },
    {
      url: "#",
      icon: "envelope",
      name: "Email"
    },
    {
      url: "https://twitter.com/denoic06",
      icon: "x-twitter",
      name: "X"
    }
  ]

  contactMe() {
    (document.querySelector("#contact-me-dialog") as HTMLDialogElement).showModal();
  }
}
