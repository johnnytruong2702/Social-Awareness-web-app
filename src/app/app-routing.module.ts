import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { PostCampaignComponent } from './post-campaign/post-campaign.component';
import { SuccessComponent } from './success/success.component';
import { AdminComponent } from './admin/admin.component';
import { RoleGuard } from './guards/role.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'post-campaign', component: PostCampaignComponent},
  //{ path: 'post-campaign', component: PostCampaignComponent, canActivate: [RoleGuard], data: { expectedRole: ['user', 'businessOwner'] } },
  { path: 'success', component: SuccessComponent },
  { path: 'admin', component: AdminComponent, canActivate: [RoleGuard], data: { expectedRole: 'admin' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
