import Comment from './../models/ticket';
import CommentService from './../services/comment.service';
import { NextFunction, Request, Response, Router } from 'express';

export const CommentController = (): Router => {
  const router = Router();

  router.post('/', CommentService.create);

  return router;
};
