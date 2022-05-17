import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersServices from '../services/users.services';

export default class UsersControllers {
  public user: UsersServices;

  constructor() {
    this.user = new UsersServices();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
  
      const userCreated = await this.user.create(user);
  
      res.status(StatusCodes.CREATED).json({ token: userCreated });
    } catch (error) {
      next();
    }
  };
}
