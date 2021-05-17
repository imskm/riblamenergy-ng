import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService, loginURI, landingURI } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(): boolean {
  	if (!this.authService.isAuthenticated()) {
  		this.router.navigate([loginURI]);
  		return false;
  	}

  	return true;
  }
}
