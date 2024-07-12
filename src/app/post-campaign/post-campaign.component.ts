// src/app/components/post-campaign/post-campaign.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-post-campaign',
  templateUrl: './post-campaign.component.html',
  imports: [FormsModule]
})
export class PostCampaignComponent {
  title = '';
  description = '';
  author = '';
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  postCampaign() {
    this.http.post('/.netlify/functions/api/campaign', {
      title: this.title,
      description: this.description,
      author: this.author
    }).subscribe((response: any) => {
      this.router.navigate(['/success']);
    });
  }
}
