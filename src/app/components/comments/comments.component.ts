import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommentService } from './../../services/comment.service';
import { Ticket } from './../../models/ticket';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() public ticket: Ticket;

  public commentForm = this.fb.group({
    text: [ '', Validators.required ],
    author: [ '', Validators.required ]
  });

  constructor(
    private fb: FormBuilder,
    private commentService: CommentService
  ) { }

  ngOnInit() {
  }

  public submitForm() {
    this.commentService.create(this.commentForm.value, this.ticket._id).subscribe(
      (data: any) => {
        this.ticket.comments.push(data.comment);
        this.commentForm.reset();
      },
      err => console.log(err)
    );
  }

}
