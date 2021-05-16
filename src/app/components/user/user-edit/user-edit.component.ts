import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { MessageService } from '../../../services/message.service';
import { UserModel } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: UserModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private msgService: MessageService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.get(Number(id)).subscribe((res: any) => {
      const temp = res.data;
      const data = temp.user;

      this.user = new UserModel(
        data.first_name,
        data.last_name,
        Number(data.gender),
        Number(data.role),
        data.email,
        "",
        "",
        data.phone,
        data.created_at,
        data.id
      );
    });
  }

  update(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.update(Number(id), this.user).subscribe((res: any) => {
        const url = `/user/${id}/show`;
        this.msgService.set("User updated successfully");
        this.router.navigate([url]);
    });
  }

}
