import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../models/user.model';

@Injectable({
	providedIn: 'root'
})
@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  user: UserModel;

  constructor(
    private route: ActivatedRoute,
  	private router: Router,
  	private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.userService.get(Number(id)).subscribe((res: any) => {
      this.user = res.data;
      // @TODO Handle error/not found response
    });
  }

}
