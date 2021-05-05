import { Component, OnInit, Injectable } from '@angular/core';

import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

	user = new UserModel("", "", 1, 2, "", "", "", "");

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  create() {
  	this.userService.create(this.user)
  		.subscribe((res) => {
        // @TODO Show success/error message
  		});
  }
}
