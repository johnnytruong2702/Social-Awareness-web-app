import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { PostCampaignComponent } from './post-campaign/post-campaign.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCampaignComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule to imports
    NgModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent] // No bootstrap component here
})
export class AppModule { }
