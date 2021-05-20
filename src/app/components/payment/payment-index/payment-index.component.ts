import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-payment-index',
  templateUrl: './payment-index.component.html',
  styleUrls: ['./payment-index.component.css']
})
export class PaymentIndexComponent implements OnInit {

  @Output()
  paginate: EventEmitter<number> = new EventEmitter<number>();

  @Input() paymentList: Array<any>;

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
