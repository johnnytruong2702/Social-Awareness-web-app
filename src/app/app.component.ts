import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isLoggedIn$: Observable<boolean>;
  username$: Observable<string | null>;

  constructor(public authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.username$ = this.authService.getUsername(); // Define username$ here
  }

  ngOnInit() {
    if (typeof window !== 'undefined' && localStorage) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        this.authService.setUsername(storedUsername); // Use setUsername method
      }
    }
  }
}
