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
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-app';
  isLoggedIn$: Observable<boolean> | undefined;
  username$: Observable<string | null> | undefined;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    if (localStorage.getItem('token') !== null) {
      this.authService.setLoggedIn(true);
    }

    if (localStorage.getItem('username') !== null) {
      this.authService.setUsername(localStorage.getItem('username'));
    }

    this.isLoggedIn$ = this.authService.isLoggedIn();
    this.username$ = this.authService.getUsername(); // Define username$ here
    if (typeof window !== 'undefined' && localStorage) {
      const storedUsername = localStorage.getItem('username');
      if (storedUsername) {
        this.authService.setUsername(storedUsername); // Use setUsername method
      }
    }
  }
}
