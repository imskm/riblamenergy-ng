import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user: any;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  	this.user = this.authService.getUser();
  }

  userFullName() {
  	return this.user.first_name + " " + this.user.last_name;
  }

}
