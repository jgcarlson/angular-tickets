import { Comment } from './comment';

export class Ticket {
  _id?: string;
  title: string;
  description: string;
  status: string; // (Options are "Open", "Closed", "On Hold"),
  department: string; // (Options are "Billing","Sales","Customer Service","Retention","Scheduling")
  comments?: Array<Comment>;
  dateCreated?: Date;
  lastModified?: Date;
}
