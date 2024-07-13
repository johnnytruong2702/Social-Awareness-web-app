// src/app/components/post-campaign/post-campaign.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-post-campaign',
  templateUrl: './post-campaign.component.html',
  styleUrls: ['./post-campaign.component.css'],
  imports: [CommonModule, FormsModule],
})
export class PostCampaignComponent {
  title = '';
  description = '';
  author = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  postCampaign() {
    this.http
      .post('https://social-awareness-backendapp.netlify.app/api/campaign', {
        title: this.title,
        description: this.description,
        author: this.author,
      })
      .subscribe((response: any) => {
        this.router.navigate(['/success']);
      });
  }
}
