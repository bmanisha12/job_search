import { Component, ElementRef } from '@angular/core';
import { JobService } from '../job.service';
import { HttpClient } from '@angular/common/http';
import { Job } from '../models/job.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {
  jobsList: Job[] = [];
  service: JobService;
  favouriteJobs: Job[] = [];

  constructor(private jobservice: JobService, private elementRef: ElementRef, private router: Router) {
    this.service = jobservice;
  }
  ngOnInit(): void {
    this.getJobsList();
    this.getFavouriteJobs();
  }

  getJobsList() {
    this.service.getAllJobs().subscribe((jobs: Job[]) => {
      this.jobsList = jobs;
    });
  }

  getFavouriteJobs() {
    this.favouriteJobs = this.service.FavJobs;
    if (this.favouriteJobs.length > 0) {
      setTimeout(() => {
        this.setFavIcon();
      }, 100);
    }

  }


  setFavIcon() {
    this.jobsList?.forEach((job: Job) => {
      this.favouriteJobs?.forEach((favJob: Job) => {
        if (job.id === favJob.id) {
          const starIcon = this.elementRef.nativeElement.querySelector(`#star-${job.id}`);
          starIcon.classList.add('active');
          starIcon.classList.remove('icon-star');
        }
      });
    });
  }


  toggleStar(currentJobId: number) {
    const job = this.jobsList.find(j => j.id === currentJobId) as Job;
    const starIcon = this.elementRef.nativeElement.querySelector(`#star-${currentJobId}`);
    if (this.favouriteJobs.length === 0) {
      this.favouriteJobs.push(job);
      this.service.FavJobs = this.favouriteJobs;
      starIcon.classList.add('active');
      starIcon.classList.remove('icon-star');
    } else if (this.favouriteJobs.length > 0) {
      let favFlag = false;
      this.favouriteJobs.forEach((job: Job) => {
        if (job.id == currentJobId) {
          favFlag = true;
        }
      });
      if (favFlag) {
        this.favouriteJobs = this.favouriteJobs.filter(job => job.id !== currentJobId);
        this.service.FavJobs = this.favouriteJobs;
        starIcon.classList.remove('active');
        starIcon.classList.add('icon-star');
      } else {
        this.favouriteJobs.push(job);
        starIcon.classList.add('active');
        starIcon.classList.remove('icon-star');
      }
    }
  }

  navigateToJob(jobId: number): void {
    this.router.navigate(['/jobs', jobId]);
  }
}
