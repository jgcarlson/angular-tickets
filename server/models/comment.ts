import { model, Schema } from 'mongoose';
import Ticket from './ticket';

const CommentSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  ticket: {
    type: Schema.Types.ObjectId,
    ref: 'Ticket'
  }
}, {
  timestamps: {
    createdAt: 'dateCreated'
  }
});

CommentSchema.post('save', (comment) => {
  console.log('POST SAVE', comment.ticket, comment._id);
  Ticket.findByIdAndUpdate(
    comment.ticket,
    { '$push': { 'comments': comment._id } },
    (err, ticket) => {
      if (err) {
        console.log('Error saving comment:', err);
      }
    }
  );
});

export default model('Comment', CommentSchema);
