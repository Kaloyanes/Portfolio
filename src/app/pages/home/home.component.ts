import { Component, Input, NgModule } from '@angular/core';
import { AboutMeComponent } from "./sections/about-me/about-me.component";
import { ProjectsComponent } from "./sections/projects/projects.component";
import { ContactMeComponent } from "./sections/contact-me/contact-me.component";
import { EducationComponent } from "./sections/education/education.component";
import { EmailService } from '../../services/email.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

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

  sendEmail() {

    // call sendEmail from contactMeComponent
    this.isSubmitted = true;

    if (this.email.invalid || this.message.invalid) {
      throw new Error("Email or message is empty");
    }

    (document.querySelector("#contact-me-dialog") as HTMLDialogElement).close();


    this.emailService.sendEmail(
      this.email.value,
      this.message.value
    );

    this.email.reset();
    this.message.reset();
    this.isSubmitted = false;


  }


  ngOnInit(): void {
    document.body.addEventListener('pointermove', (e) => {
      document.documentElement.style.setProperty('--x', Math.round(e.clientX).toString());
      document.documentElement.style.setProperty('--y', Math.round(e.clientY).toString());
    });
  }


}
