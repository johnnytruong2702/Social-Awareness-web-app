import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private username = new BehaviorSubject<string | null>(null);
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }
  getUsername(): Observable<string | null> {
    return this.username.asObservable();
  }

  setUsername(username: string | null): void {
    this.username.next(username);
  }

  login(email: string, password: string): void {
    this.http.post<any>('https://social-awareness-backendapp.netlify.app/api/users/login', { email, password })
      .pipe(map(response => {
        this.token = response.token;
        return response.username;  // Assuming the backend returns the username
      }))
      .subscribe(username => {
        this.username.next(username);
        this.loggedIn.next(true);
        localStorage.setItem('token', this.token || '');  // Handle null token
        localStorage.setItem('username', username);  // Store username in localStorage
        this.router.navigate(['/']);
      }, error => {
        console.error('Login error:', error);
      });
  }

  register(username: string, email: string, password: string): void {
    this.http.post<any>('https://social-awareness-backendapp.netlify.app/api/users/register', { username, email, password })
      .subscribe(() => {
        this.login(email, password);  // Auto login after registration
      }, error => {
        console.error('Registration error:', error);
      });
  }

  logout(): void {
    this.token = null;
    this.username.next(null);
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');  // Remove username from localStorage
    this.router.navigate(['/']);
  }
}
