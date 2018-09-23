import Ticket from './../models/ticket';
import TicketService from './../services/ticket.service';
import { NextFunction, Request, Response, Router } from 'express';

export const TicketController = (): Router => {
  const router = Router();

  router.get('/', TicketService.list);
  router.get('/:id', TicketService.findOne);
  router.delete('/:id', TicketService.deleteOne);
  router.post('/', TicketService.create);
  router.put('/', TicketService.update);

  return router;
};
