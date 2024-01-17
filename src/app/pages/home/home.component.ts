import { Component, Input, NgModule } from '@angular/core';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactMeComponent } from "./sections/contact-me/contact-me.component";
import { EducationComponent } from "./sections/education/education.component";
import { EmailService } from '@services/email.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, timeline, stagger } from 'motion';
import { easeOutBack, easeOutCubic, easeOutElastic } from '@utils/Easings';
import SplitType from 'split-type';
import { getAnalytics, logEvent, setUserId, setAnalyticsCollectionEnabled, setConsent } from '@angular/fire/analytics';

@Component({
  selector: 'home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [ReactiveFormsModule, AboutMeComponent, ProjectsComponent, ContactMeComponent, EducationComponent,]
})
export class HomeComponent {
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
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
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
    // if its debug mode, don't animate
    let skipAnimation = false;

    if (location.hostname === "localhost" && skipAnimation) {
      document.querySelector(".welcome")?.classList.add('hidden');
      return;
    }

    const nameWords = new SplitType('#nameHeadline');

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
          ".cell:not(.img-pfp)", {
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
            delay: stagger(0.07, { from: "first" }), easing: easeOutCubic, at: 2, duration: 0.5
          }
        ]
      ],
    );
  }

  sendEmail() {
    this.isSubmitted = true;

    if (this.email.invalid || this.message.invalid) {
      throw new Error("Email or message is empty");
    }

    this.closeDialog();

    this.emailService.sendEmail(
      this.email.value,
      this.message.value
    );

    this.email.reset();
    this.message.reset();
    this.isSubmitted = false;
  }

  closeDialog() {
    (document.querySelector('#contact-me-dialog') as HTMLDialogElement).close();
  }
}
