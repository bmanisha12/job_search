import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JobService } from './job.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = { 
  providers: [provideRouter(routes), provideAnimationsAsync(), JobService, 
    importProvidersFrom(HttpClientModule, MatCardModule, CommonModule, RouterOutlet, )]
};
