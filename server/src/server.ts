import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { join } from 'path';
import { TicketController } from './../controllers/ticket.controller';
import { CommentController } from './../controllers/comment.controller';

let APP_DIR: string;

if (process.env.NODE_ENV === 'production') {
  APP_DIR = '../../tickets';
} else {
  APP_DIR = '../../dist/tickets';
}

class Server {
  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.api();
    this.routes();
  }

  private config(): void {
    this.app.set('port', process.env.PORT || 3000);
    this.app.set('env', process.env.NODE_ENV || 'development');
    this.app.use(express.static(join(__dirname, APP_DIR)));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}));
    this.app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
      next();
    });
  }

  private api() {
    this.app.use('/api/comment', CommentController());
    this.app.use('/api/ticket', TicketController());
  }

  private routes() {
    this.app.get('*', (req, res) => {
      res.sendFile(join(__dirname, APP_DIR, 'index.html'));
    });
  }
}

export default Server.bootstrap().app;
