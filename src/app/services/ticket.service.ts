import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ticket } from './../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {}

  public list() {
    return this.http.get('/api/ticket');
  }

  public create(ticket: Ticket) {
    return this.http.post('/api/ticket', ticket);
  }

  public update(ticket: Ticket) {
    return this.http.put('/api/ticket', ticket);
  }

  public find(id: string) {
    return this.http.get('/api/ticket/' + id);
  }

  public delete(id: string) {
    return this.http.delete('/api/ticket/' + id);
  }
}
