import { Component, Input, NgModule } from '@angular/core';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactMeComponent } from "./sections/contact-me/contact-me.component";
import { EducationComponent } from "./sections/education/education.component";
import { EmailService } from '@services/email.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { animate, timeline, stagger } from 'motion';
import { easeOutBack, easeOutCubic, easeOutElastic } from '@utils/Easings';

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

  ngAfterViewInit(): void {
    timeline(
      [
        ['.img-pfp', {
          scale: [0, 1.3],
          y: ['-15%', '15%'],
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
        ]
      ],
    );
  }

  sendEmail() {

    // call sendEmail from contactMeComponent
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


  ngOnInit(): void {
    document.body.addEventListener('pointermove', (e) => {
      document.documentElement.style.setProperty('--x', Math.round(e.clientX).toString());
      document.documentElement.style.setProperty('--y', Math.round(e.clientY).toString());
    });
  }


}
