import { Component, OnInit, Injectable } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: Array<UserModel>;

  constructor(private userService: UserService) {
  	this.users = [];
  }

  ngOnInit(): void {
  	this.fetchUsers();
  }

  fetchUsers() {
  	this.userService.fetch().subscribe((res: any) => {
  		this.users = res.data;
      // @TODO Handle error response
  	});
  }

  prependUser(user: UserModel) {
  	this.users.unshift(user);
  }

  genderText(gender: number) {
    return gender == 1? "Male" : "Female";
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

}
