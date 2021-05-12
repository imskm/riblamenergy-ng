import { Component, OnInit, Input } from '@angular/core';

import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  @Input() userList: Array<any>;

  constructor() {}

  ngOnInit(): void {
  }

  genderText(gender: number) {
    return gender == 1? "Male" : "Female";
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

}
