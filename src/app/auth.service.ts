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
  private token: string | null = null;

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(email: string, password: string): void {
    this.http.post<any>('/api/users/login', { email, password })
      .pipe(map(response => response.token))
      .subscribe(token => {
        this.token = token;
        this.loggedIn.next(true);
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      }, error => {
        console.error('Login error:', error);
      });
  }

  register(username: string, email: string, password: string): void {
    this.http.post<any>('/api/users/register', { username, email, password })
      .subscribe(() => {
        this.login(email, password); // Auto login after registration
      }, error => {
        console.error('Registration error:', error);
      });
  }

  logout(): void {
    this.token = null;
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}
