import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-project-index',
  templateUrl: './project-index.component.html',
  styleUrls: ['./project-index.component.css']
})
export class ProjectIndexComponent implements OnInit {

  @Output()
  paginate: EventEmitter<number> = new EventEmitter<number>();

  @Input() projectList: Array<any>;

  page: number = 1;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
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

}
