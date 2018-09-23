import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketService } from './../../services/ticket.service';
import { Ticket } from './../../models/ticket';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnChanges {

  @Input() public ticket: Ticket;

  public statusOptions: Array<string> = [
    'Open',
    'Closed',
    'On Hold'
  ];

  public departmentOptions: Array<string> = [
    'Billing',
    'Sales',
    'Customer Service',
    'Retention',
    'Scheduling'
  ];

  public ticketForm = this.fb.group({
    title: [ '', Validators.required ],
    description: [ '', Validators.required ],
    status: [ '', Validators.required ],
    department: [ '', Validators.required ]
  });

  constructor(
    private fb: FormBuilder,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateForm();
  }

  public updateForm() {
    this.ticketForm.patchValue({
      title: this.ticket.title,
      description: this.ticket.description,
      status: this.ticket.status,
      department: this.ticket.department
    });
  }

  public submitForm() {
    const updatedTicket = Object.assign(this.ticket, this.ticketForm.value);
    this.ticketService.update(updatedTicket).subscribe(
      data => { window.location.reload(); },
      err => console.log('Error:', err)
    );
  }

}
