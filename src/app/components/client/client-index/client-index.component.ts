import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  @Output()
  paginate: EventEmitter<number> = new EventEmitter<number>();

  @Input() clientList: Array<any> = [];

  page: number = 1;

  constructor() { }

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
