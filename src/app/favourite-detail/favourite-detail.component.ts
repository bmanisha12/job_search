import { Component } from '@angular/core';
import { Job } from '../models/job.model';
import { JobService } from '../job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './favourite-detail.component.html',
  styleUrl: './favourite-detail.component.css'
})
export class FavouriteDetailComponent {
  favouriteJobs: Job[] = [];

  constructor(private jobservice: JobService, private router: Router) {

  }

  ngOnInit(): void {
    this.favouriteJobs = this.jobservice.FavJobs;
  }

  navigateToSpecificJob(jobId: number): void {
    this.router.navigate(['/jobs', jobId]);
  }

}
