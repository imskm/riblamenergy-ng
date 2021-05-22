import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {

  @Output()
  paginate: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  subtree: EventEmitter<number> = new EventEmitter<number>();

  @Input() userList: Array<any>;
  @Input() showSubtree: boolean = false;
  public page: number = 1;

  constructor() {}

  ngOnInit(): void {
  }

  genderText(gender: number) {
    return gender == 1? "Male" : "Female";
  }

  roleText(role: number) {
    return (role == 2) ? "Business Head" : ((role == 3) ? "Area Manager" : ((role == 4) ? "Field Engineer" : "Unknown"));
  }

  prevPage() {
    if (this.page < 2) {
      return;
    }
    --this.page;
    this.paginate.emit(this.page);
  }

  nextPage() {
    ++this.page;
    this.paginate.emit(this.page);
  }

  fetchSubtree(index: number) {
    this.subtree.emit(index);
  }

}
