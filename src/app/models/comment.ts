import { Ticket } from './ticket';

export class Comment {
  _id?: string;
  text: string;
  author: string;
  ticket: Ticket;
  dateCreated?: Date;
}
