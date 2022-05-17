import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsServices from '../services/products.services';

export default class ProductsControllers {
  public product: ProductsServices;

  constructor() {
    this.product = new ProductsServices();
  }

  getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await this.product.getAll();
  
      res.status(StatusCodes.OK).json(products);
    } catch (error) {
      next();
    }
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product = req.body;
  
      const productCreated = await this.product.create(product);
  
      res.status(StatusCodes.CREATED).json(productCreated);
    } catch (error) {
      next();
    }
  };
}
