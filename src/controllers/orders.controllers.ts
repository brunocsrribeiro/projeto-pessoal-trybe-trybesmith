import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersServices from '../services/orders.services';

export default class OrdersControllers {
  public order: OrdersServices;

  constructor() {
    this.order = new OrdersServices();
  }

  getAll = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const orders = await this.order.getAll();
  
      res.status(StatusCodes.OK).json(orders);
    } catch (error) {
      next();
    }
  };
}
