import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { MessageService } from '../../../services/message.service';
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
  }

  create() {
  	this.userService.create(this.user)
  		.subscribe((res) => {
        // @TODO Show success/error message
        const id = res.data.id;
        const url = `/user/${id}/show`;
        this.msgService.set("User created successfully");
        this.router.navigate([url]);
  		});
  }
}
