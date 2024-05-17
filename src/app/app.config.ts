import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { getApp, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { initializeFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
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
      provideFirestore(() => initializeFirestore(
        getApp(),
        {
          localCache: {
            kind: 'persistent',
          },
        },

      )),
      provideStorage(() => getStorage()),
      provideAuth(() => getAuth()),

    ),
  ],
};
