import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    // configure the Zone provider
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // configure the Router provider
    provideRouter(routes),
    // configure the HttpClient provider
    provideHttpClient()
  ]
};
