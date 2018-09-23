import { model, Schema } from 'mongoose';

const TicketSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  comments: [{
    type: Schema.Types.ObjectId, ref: 'Comment'
  }]
}, {
  timestamps: {
    createdAt: 'dateCreated',
    updatedAt: 'lastModified'
  }
});

export default model('Ticket', TicketSchema);
