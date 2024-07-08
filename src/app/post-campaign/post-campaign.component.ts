// src/app/components/post-campaign/post-campaign.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-post-campaign',
  standalone: true,
  imports:[FormsModule],
  templateUrl: './post-campaign.component.html'
})
export class PostCampaignComponent {
  title = '';
  description = '';
  author = '';
  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('/.netlify/functions/postCampaign', {
      title: this.title,
      description: this.description,
      author: this.author
    }).subscribe((response: any) => {
      this.message = response.message || 'Error posting campaign';
    });
  }
}
