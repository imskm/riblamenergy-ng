import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, landingURI } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSerivce: AuthService, private router: Router) { }

  ngOnInit(): void {
  	if (this.authSerivce.isAuthenticated()) {
  		// this.router.navigate([landingURI]);
  	}
  }

  onLogin(email: string, password: string) {
  	this.authSerivce.login(email, password).subscribe((res: any) => {
  		console.log("OK FROM LOGIN COMPONENT");
  		console.log(res);
		this.router.navigate([landingURI]);

  	});
  }
}
