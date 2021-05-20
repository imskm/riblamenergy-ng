import { Component, OnInit } from '@angular/core';

import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Array<any> = [];

  constructor(
  	private clientService: ClientService,
  ) { }

  ngOnInit(): void {
  	this.fetchClient(1);
  }

  fetchClient(page: number) {
  	this.clientService.fetch(page).subscribe((res) => {
  		this.clients = res.data;
  	});
  }

  paginateClient(page: number) {
    console.log("Paginate client")
    this.fetchClient(page);
  }

}
