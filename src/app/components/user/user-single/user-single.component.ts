import { Component, OnInit, Input } from '@angular/core';

import { UserModel } from '../../../models/user.model';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
