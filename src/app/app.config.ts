import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: "AIzaSyBbMaxfR1yzwf5uO-8wq6CZlZQbZ7mRQqw",
  authDomain: "ecommerce-49840.firebaseapp.com",
  projectId: "ecommerce-49840",
  storageBucket: "ecommerce-49840.appspot.com",
  messagingSenderId: "790804451206",
  appId: "1:790804451206:web:e5047eb2421d5815de2607",
  measurementId: "G-CMZM2BTKET"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),  // No need to wrap this in importProvidersFrom
    provideAuth(() => getAuth())  // Same here, add it directly
  ]
};
