import { Routes } from '@angular/router';
import { JobsComponent } from './jobs/jobs.component';
import { FavouriteDetailComponent } from './favourite-detail/favourite-detail.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: 'jobs', component: JobsComponent },
  { path: 'favorites', component: FavouriteDetailComponent },
  { path: 'jobs/:id', component: JobDetailComponent }
];
