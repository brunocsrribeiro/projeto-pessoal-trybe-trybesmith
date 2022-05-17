import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import productsSchema from '../schemas/products.schema';
import '../middlewares.errors';

export default class Validations {
  Validated = (req: Request, res: Response, next: NextFunction): Response | void => {
    const validations = req.body;
  
    const { error } = productsSchema.validate(validations);
  
    if (error?.details[0].type === 'string.base' || error?.details[0].type === 'string.min') {
      res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: error.message });
    }
  
    if (error) throw error;
  
    next();
  };
}
