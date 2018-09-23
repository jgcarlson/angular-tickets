import mongoose from 'mongoose';

mongoose
  .connect('mongodb://127.0.0.1:27017/tickets', { useNewUrlParser: true })
  .then(() => { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/tickets`); } )
  .catch(() => { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/tickets`); });
