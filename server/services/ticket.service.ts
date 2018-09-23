import Ticket from './../models/ticket';
import { NextFunction, Request, Response, Router } from 'express';
import mongoose from 'mongoose';

const create = async (req: Request, res: Response, next: NextFunction) => {
  const ticket = new Ticket(req.body);
  ticket.save()
    .then(data => {
      res.status(200).json({
        'success': true,
        'message': `Ticket "${ticket.title}" created successfully.`
      });
    })
    .catch(err => {
      console.log('Save failed:', err);
      res.status(400).json({
        'success': false,
        'message': `Ticket "${ticket.title}" failed to save...`
      });
    });
};

const list = async (req: Request, res: Response, next: NextFunction) => {
  Ticket.find()
    .then(data => {
      res.status(200).json({
        'success': true,
        'tickets': data
      });
    })
    .catch(err => {
      console.log('Find failed:', err);
      res.status(400).json({
        'success': false,
        'message': `Failed to find tickets...`
      });
    });
};

const findOne = async (req: Request, res: Response, next: NextFunction) => {
  Ticket.findOne({ _id: req.params.id }).populate('comments')
    .then(data => {
      res.status(200).json({
        'success': true,
        data
      });
    })
    .catch(err => {
      console.log('Find failed:', err);
      res.status(400).json({
        'success': false,
        'message': 'Failed to find ticket...'
      });
    });
};

const update = async (req: Request, res: Response, next: NextFunction) => {
  const ticket = req.body;
  ticket.lastModified = new Date();
  Ticket.findOneAndUpdate({ _id: ticket._id}, ticket)
    .then(data => {
      res.status(200).json({
        'success': true,
        data
      });
    })
    .catch(err => {
      console.log('Update failed:', err);
      res.status(400).json({
        'success': false,
        'message': `Failed to update ticket...`
      });
    });
};

const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  Ticket.findByIdAndRemove(req.params.id)
    .then(data => {
      res.status(200).json({
        'success': true,
        data
      });
    })
    .catch(err => {
      console.log('Delete failed:', err);
      res.status(400).json({
        'success': false,
        'message': `Failed to delete ticket...`
      });
    });
};


export default { create, list, findOne, update, deleteOne };
