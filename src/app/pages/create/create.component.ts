import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Auth, signOut } from '@angular/fire/auth';

@Component({
  selector: 'create',
  standalone: true,
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  constructor(public firestore: Firestore, public auth: Auth) { }

  // async ngOnInit() {
  //   await this.auth.authStateReady();
  //   console.log(this.auth.currentUser);

  //   if (this.auth.currentUser === null) {
  //     window.location.href = "/login";
  //     return;
  //   }
  // }

  async signOut() {
    await signOut(this.auth);
    window.location.href = "/home";
  }
}
