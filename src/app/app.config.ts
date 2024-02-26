import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';
import {provideFirebaseApp, initializeApp, firebaseApp$, FirebaseApp} from '@angular/fire/app';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {provideStorage, getStorage} from '@angular/fire/storage';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideAnalytics, getAnalytics, initializeAnalytics} from '@angular/fire/analytics';

import {AutoAnimateModule} from '@formkit/auto-animate/angular'

import {routes} from './app.routes';
import {take} from 'rxjs';
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      provideFirebaseApp(
        () =>
          initializeApp({
            apiKey: environment.apiKey,
            authDomain: environment.authDomain,
            projectId: environment.projectId,
            storageBucket: environment.storageBucket,
            messagingSenderId: environment.messagingSenderId,
            appId: environment.appId,
            measurementId: environment.measurementId,
          }),
      ),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      provideAuth(() => getAuth()),
      provideAnalytics(() => {
        firebaseApp$.subscribe(firebaseApp => {
          initializeAnalytics(firebaseApp);
        });

        return getAnalytics();
      }),
    ),
  ],
};
