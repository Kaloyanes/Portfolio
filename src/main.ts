import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { getApp, initializeApp, provideFirebaseApp } from "@angular/fire/app";

import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { getAnalytics, provideAnalytics } from "@angular/fire/analytics";


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, MatExpansionModule, MatIconModule),
    provideAnimations(),
    importProvidersFrom(provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCKGvJjnm3JxESI67fsJ3I6QAUSpk6lWX8",
      authDomain: "kaloyanes-portfolio.firebaseapp.com",
      projectId: "kaloyanes-portfolio",
      storageBucket: "kaloyanes-portfolio.appspot.com",
      messagingSenderId: "191853203948",
      appId: "1:191853203948:web:25121024417a2103e0b0c9",
      measurementId: "G-0L6X6Q5RER",
    }))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideAnalytics(() => getAnalytics())),
  ]
})
  .catch(err => console.error(err));
