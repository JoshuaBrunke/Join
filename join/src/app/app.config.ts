import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnimations } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    isDevMode() 
      ? provideRouter(routes) 
      : provideRouter(routes, withHashLocation()),
    provideAnimations(), 
    provideZoneChangeDetection({ eventCoalescing: true }), 

    provideFirebaseApp(() => initializeApp(environment.firebase)), 

    provideFirestore(() => getFirestore())
  ]
};
