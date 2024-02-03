import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword, Auth, getAuth } from '@angular/fire/auth';
import { browserLocalPersistence, browserSessionPersistence, setPersistence } from 'firebase/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth;
  isUserLoggedIn: boolean = false;

  constructor() {
    this.auth = getAuth();
  }

  async ngOnInit(): Promise<void> {
    await this.auth.authStateReady();

    this.isUserLoggedIn = this.auth.currentUser ? true : false;
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.isUserLoggedIn = true;
      } else {
        this.isUserLoggedIn = false;
      }
    });
  }

  async signIn(email: string, password: string): Promise<void> {
    await setPersistence(this.auth, browserLocalPersistence);

    try {
      await signInWithEmailAndPassword(this.auth, email, password);
    } catch (e) {
      console.error(e);
      alert(e);
      return;
    }
  }

}
