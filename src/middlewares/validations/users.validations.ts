import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import usersSchema from '../schemas/users.schema';
import '../middlewares.errors';

export default class Validations {
  public ValidStrings = (req: Request, res: Response, next: NextFunction): Response | void => {
    const validations = req.body;
  
    const { error } = usersSchema.validate(validations);
  
    if (error?.details[0].type === 'string.base' || error?.details[0].type === 'string.min') {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: error.message });
    }

    next();
  };

  ValidNumbers = (req: Request, res: Response, next: NextFunction): Response | void => {
    const validations = req.body;
  
    const { error } = usersSchema.validate(validations);
  
    if (error?.details[0].type === 'number.base' || error?.details[0].type === 'number.min') {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: error.message });
    }
  
    if (error) throw error;
  
    next();
  };
}
