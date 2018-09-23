import Comment from './../models/comment';
import { NextFunction, Request, Response, Router } from 'express';
import mongoose from 'mongoose';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const comment = new Comment({
    text: req.body.text,
    author: req.body.author
  });
  comment.ticket = req.body.ticket;
  comment.save()
    .then(data => {
      res.status(200).json({
        'success': true,
        'message': 'Comment created successfully.',
        'comment': data
      });
    })
    .catch(err => {
      console.log('Save failed:', err);
      res.status(400).json({
        'success': false,
        'message': 'Comment failed to save...'
      });
    });
};

export default { create };
