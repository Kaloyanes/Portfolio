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
            apiKey: environment.apiKey,
            authDomain: environment.authDomain,
            projectId: environment.projectId,
            storageBucket: environment.storageBucket,
            messagingSenderId: environment.messagingSenderId,
            appId: environment.appId,
            measurementId: environment.measurementId,
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
      provideAnalytics(() => {
        firebaseApp$.subscribe(firebaseApp => {
          initializeAnalytics(firebaseApp);
        });

        return getAnalytics();
      }),
    ),
  ],
};
