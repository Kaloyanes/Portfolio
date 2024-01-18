import { Component, } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
@Component({
  selector: 'login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.email,
      Validators.minLength(5),
    ],
  });
  password = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(5),
    ],
  });

  constructor(public authService: AuthService) { }

  async signIn() {
    console.log(this.email.value, this.password.value);

    if (this.email.invalid || this.password.invalid) {
      alert("Invalid email or password");
      return;
    }

    await this.authService.signIn(this.email.value, this.password.value);

    // redirect to create
    window.location.href = "/create";
  }
}
