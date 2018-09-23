import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  public create(comment, ticketId) {
    comment.ticket = ticketId;
    return this.http.post('/api/comment', comment);
  }
}
