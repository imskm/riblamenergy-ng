import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, shareReplay, tap } from 'rxjs/operators';

import { MessageService } from './message.service';
import { HttpRequestService } from './http-request.service';
import { UserModel } from '../models/user.model';

export const loginURI = "/login";
export const landingURI = "/dashboard";

// @TODO Incomplete auth service, when user refresh the browser the value in user property
//   will be lost therefore leaving the user unauthenticated and user can not login again.
//   Fix it moving the user data from object property to local storage

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = null;
  constructor(
  	private http: HttpClient,
  	private router: Router,
  	private httpRequest: HttpRequestService,
  	private msgService: MessageService,
  ) { }

  login(email: string, password: string) {
  	const form = new FormData();

  	form.append("email", email);
  	form.append("password", password);

  	return this.httpRequest.post('auth/login/authenticate', form).pipe(
  		shareReplay(),
  		tap((res: any) => {
  			console.log("LOGGED IN");
			this.user = res.data;
			this.storeUser(this.user);
  		}),
  		catchError((res: HttpErrorResponse) => {
  			console.log("LOGIN: CATCHED ERROR");
  			console.log(res);

  			if (res.status == 302) {
  				this.router.navigate([landingURI]);
  				this.msgService.set("Already logged in");
  			}
  			return throwError(res);
  		})
  	);
  }

  logout() {
  	return this.httpRequest.post('auth/login/logout', null).pipe(
  		shareReplay(),
  		tap((res: HttpResponse<any>) => {
  			this.user = null;
  			this.removeUser();
  			console.log("LOGGED OUT");
  			console.log(res);
  			this.router.navigate([loginURI]);
        window.location.reload();
  		})
  	);
  }

  isAuthenticated() {
  	if (!this.getUser()) {
  		return false;
  	}

  	// Restore the user property if it's not set and storage has user details

  	return true;
  }

  isAdmin() {
    const user = this.getUser();

    return user.role == 1;
  }

  isUser() {
    const user = this.getUser();

    return user.role != 1;
  }

  storeUser(user: any): void {
  	localStorage.setItem('user', JSON.stringify(user));
  }

  removeUser(): void {
  	localStorage.removeItem('user');
  }

  getUser(): any {
  	return this.user ? this.user : JSON.parse(localStorage.getItem('user'));
  }
}
