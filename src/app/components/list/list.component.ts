import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../services/ticket.service';
import { Ticket } from './../../models/ticket';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public ticket: Ticket = {
    title: '',
    description: '',
    status: '',
    department: ''
  };
  public tickets: Array<Ticket>;
  public update = true;
  public modalActive = false;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.list();
  }

  public list() {
    this.ticketService.list().subscribe(
      (data: any) => this.tickets = data.tickets,
      (err: any) => console.log(err.message)
    );
  }

  public find(id) {
    this.ticketService.find(id).subscribe(
      (data: any) => this.ticket = data.data,
      (err: any) => console.log('Error:', err)
    );
    this.modalActive = true;
  }

  public delete(id, index) {
    this.ticketService.delete(id).subscribe(
      (data: any) => this.tickets.splice(index, 1),
      (err: any) => console.log('Error:', err)
    );
  }

}
