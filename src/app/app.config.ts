import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions({
      onViewTransitionCreated: (transition) => {
        console.log(`View transition from ${transition.from} to ${transition.to} created`);
      },
    })),
    importProvidersFrom(
      provideFirebaseApp(
        () =>
          initializeApp({
            apiKey: 'AIzaSyCKGvJjnm3JxESI67fsJ3I6QAUSpk6lWX8',
            authDomain: 'kaloyanes-portfolio.firebaseapp.com',
            projectId: 'kaloyanes-portfolio',
            storageBucket: 'kaloyanes-portfolio.appspot.com',
            messagingSenderId: '191853203948',
            appId: '1:191853203948:web:25121024417a2103e0b0c9',
            measurementId: 'G-0L6X6Q5RER',
          }),
      ),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage()),
      provideAuth(() => getAuth()),
    ),
  ],
};
