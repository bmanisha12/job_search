import { Component } from '@angular/core';
import { JobService } from '../job.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { jobDescription } from '../models/JobDescription.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClient],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  service: JobService;
  jobDescription: jobDescription = {id: 0};

  constructor(private route: ActivatedRoute, private jobservice: JobService, private router: Router) {
    this.service = jobservice;

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let jobId = +params['id'];
      this.getJobsDescription(jobId);
    });
  }

  getJobsDescription(jobId: number): void {
    this.service.getJobById(jobId).subscribe(description => {
      this.jobDescription = description
    });
  }

  navigateToJob(): void {
    this.router.navigate(['/jobs']);
  }

}