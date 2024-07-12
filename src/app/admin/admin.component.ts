// src/app/components/admin/admin.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent {
  campaigns: any[] = [];

  constructor(private http: HttpClient) {
    this.loadPendingCampaigns();
  }

  loadPendingCampaigns() {
    this.http.get('/.netlify/functions/api/campaigns/pending').subscribe((campaigns: any) => {
      this.campaigns = campaigns;
    });
  }

  approveCampaign(id: string) {
    this.http.patch(`/.netlify/functions/api/campaign/${id}/approve`, {}).subscribe(() => {
      this.loadPendingCampaigns();
    });
  }
}
