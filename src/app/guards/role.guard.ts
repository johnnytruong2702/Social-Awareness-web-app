// src/app/guards/role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const currentRole = this.authService.getRole();

    if (!this.authService.isLoggedIn() || !this.matchRoles(expectedRole, currentRole)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  private matchRoles(expectedRole: string | string[], currentRole: string): boolean {
    if (Array.isArray(expectedRole)) {
      return expectedRole.includes(currentRole);
    } else {
      return expectedRole === currentRole;
    }
  }
}
