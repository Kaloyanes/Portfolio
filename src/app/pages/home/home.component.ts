import { Component, Input, NgModule, WritableSignal, signal } from '@angular/core';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactMeComponent } from "./sections/contact-me/contact-me.component";
import { EmailService } from '@services/email.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, timeline, stagger } from 'motion';
import { easeOutBack, easeOutCubic, easeOutElastic } from '@utils/Easings';
import SplitType from 'split-type';
import { getAnalytics, logEvent, setUserId, setAnalyticsCollectionEnabled, setConsent } from '@angular/fire/analytics';
import { AchievementsComponent } from "./sections/achievements/achievements.component";
import { Achievement } from '@models/achievement';
import * as config from 'tailwindcss/defaultConfig'; // just an alias for the tailwind.config.js
import resolveConfig from 'tailwindcss/resolveConfig';
@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ReactiveFormsModule, AboutMeComponent, ProjectsComponent, ContactMeComponent, AchievementsComponent]
})
export class HomeComponent {

  selectedAchievement: WritableSignal<Achievement | undefined> = signal(undefined);

  email = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ]
  });

  message = new FormControl("", {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
    ]
  });

  isSubmitted = false;

  constructor(public emailService: EmailService) { }

  ngOnInit(): void {
    this.analytic();
  }

  async analytic() {
    let analytics = getAnalytics();
    await setAnalyticsCollectionEnabled(analytics, true);
    await setUserId(analytics, new Date().getTime().toString());
    await logEvent(analytics, "page_view", {});

    console.log("analytics", analytics);
  }

  ngAfterViewInit(): void {
    let skipAnimation = false;
    const nameWords = new SplitType('#nameHeadline');

    if ((location.hostname === "localhost" && skipAnimation) || sessionStorage.getItem("visited") === "true") {
      document.querySelector(".welcome")?.classList.add('hidden');
      var lines: HTMLElement[] = []

      lines.push(document.querySelector('#about-me-title')!, ...new SplitType('.about-me-text > p, p > strong').lines!)

      timeline([
        [
          nameWords.chars!, {
            opacity: [0, 1],
            scale: [0.8, 1],
            y: ['100%', '0%'],
          }, {
            delay: stagger(0.07, { from: "first" }), easing: easeOutBack, duration: 0.5
          }
        ],
        [
          lines, {
            y: [100, 0],
            scale: [0, 1],
            opacity: [0, 1],
          }, {
            delay: stagger(0.1, { from: 'first' }),
            duration: 0.5,
            easing: easeOutCubic,
            at: '<'
          }
        ],

        [
          '#achievement-title, .achievement', {
            opacity: [0, 1],
            scale: [0, 1],
            y: [50, 0],
          }, {
            delay: stagger(0.2, { from: "first" }),
            duration: 0.6,
            at: 1
          }
        ],
        [
          '#contact-me-title, .social', {
            opacity: [0, 1],
            scale: [0, 1],
            y: [100, 0],
          }, {
            delay: stagger(0.1),
            duration: 0.5,
            at: 1
          }
        ]

      ])

      return;
    }



    timeline(
      [
        ['.img-pfp', {
          scale: [0.4, 1.3],
          y: ['15%', '15%'],
          opacity: [0, 1],
        },
          {
            duration: 0.5, delay: 0.4, easing: easeOutCubic
          }
        ],
        ['.welcome', {
          opacity: [0, 1],
          scale: [0.8, 1],
          translate: ['-50%', "-50%"],
          y: ['-50%', '0%'],
        },
          {
            duration: 0.5, delay: 0.4, easing: easeOutCubic, at: "<",
          }
        ],
        [".img-pfp", {
          scale: [1.3, 1],
          y: ['15%', 0],

        },
          { duration: 1, delay: 1.5, easing: easeOutBack, at: "<" }],
        [".welcome",
          {
            opacity: [1, 0],
            scale: [1, 0.8],
            translate: ['-50%', "-50%"],
            y: ['0%', '-50%'],
          },
          {
            at: "<",
            delay: 1.5,
            easing: easeOutCubic,
          },
        ],
        [
          ".cell:not(.content, .img-pfp)", {
            opacity: [0, 1],
            scale: [0.8, 1],
          }
          , {
            duration: 0.8, delay: stagger(0.2, { from: "first" }), easing: easeOutElastic, at: 2
          }
        ],
        [
          nameWords.chars!, {
            opacity: [0, 1],
            scale: [0.8, 1],
            y: ['100%', '0%'],
          }, {
            delay: stagger(0.07, { from: "first" }), easing: easeOutBack, at: 2, duration: 0.5
          }
        ]
      ],
    );
    sessionStorage.setItem("visited", "true");


  }

  sendEmail() {
    this.openToast(true);

    this.isSubmitted = true;

    if (this.email.invalid || this.message.invalid) {
      throw new Error("Email or message is empty");
    }

    this.closeDialog();

    this.emailService.sendEmail(
      this.email.value,
      this.message.value
    );

    this.openToast(true);


    this.email.reset();
    this.message.reset();
    this.isSubmitted = false;
  }

  openToast(open: boolean) {

    var x = window.innerWidth < 768 ? '50%' : '0';

    if (!open) {
      animate(".toast", {
        opacity: [1, 0],
        scale: [1, 0.6],
        x: [x, 0],
      }, {
        easing: easeOutCubic,
      });

      // add closed class to toast
      setTimeout(() => {
        document.querySelector(".toast")?.classList.add("closed");
      }, 400);
      return;
    }

    document.querySelector(".toast")?.classList.remove("closed");
    animate(".toast", {
      opacity: [0, 1],
      scale: [0.6, 1],
      x: [0, x],
    }, {
      easing: easeOutCubic,
    });

    setTimeout(() => {
      if (document.querySelector(".toast")?.classList.contains("closed")) {
        return;
      }

      this.openToast(false);
    }, 4000)
  }

  closeDialog() {
    (document.querySelector('#contact-me-dialog') as HTMLDialogElement).close();
  }

  showAchievementDetails(achievement: Achievement) {
    this.selectedAchievement.set(achievement);
    (document.querySelector('#achievement-dialog') as HTMLDialogElement).showModal();
  }
}
