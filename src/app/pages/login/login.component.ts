import { Component, Input, signal } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { FormControl, FormsModule } from '@angular/forms';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth';
@Component({
  selector: 'login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(public auth: Auth) { }

  async ngOnInit(): Promise<void> {
    await setPersistence(this.auth, browserSessionPersistence);
    await this.auth.authStateReady();

    if (this.auth.currentUser) {
      window.location.href = "/create";
    }
  }

  async signIn() {
    console.log(this.email, this.password);
    try {
      await signInWithEmailAndPassword(this.auth, this.email, this.password);
    } catch (e) {
      console.error(e);
      alert(e);
      return;
    }

    // redirect to create
    window.location.href = "/create";

  }
}
