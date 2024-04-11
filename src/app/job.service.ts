import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from './models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
    allJobsUrl: string = '/jobs';
    FavJobs: Job[] = [];
  constructor(private http: HttpClient) { }

  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.allJobsUrl);
  }

  getJobById(id: number): Observable<Job> {
    const url = `${this.allJobsUrl}/${id}`;
    return this.http.get<Job>(url);
  }
}
