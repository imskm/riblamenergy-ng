import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { AuthService, loginURI, landingURI } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
  	const expectedRole = route.data.expectedRole;

  	if (!this.authService.isAuthenticated()) {
  		this.router.navigate([loginURI]);
  		return false;
  	}

  	if (expectedRole === 'admin' && this.authService.isAdmin()) {
  		return true;
  	} else if (expectedRole === 'user' && this.authService.isUser()) {
  		return true;
  	}

	this.router.navigate([loginURI]);
  	return false;
  }
}
