import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from './../../services/ticket.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

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
    private ticketService: TicketService,
    private router: Router
  ) { }

  ngOnInit() {}

  public submitForm() {
    this.ticketService.create(this.ticketForm.value).subscribe(
      data => { this.router.navigate(['/']); },
      err => console.log('Error:', err)
    );
  }

}
