import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsServices from '../services/products.services';

export default class ProductsControllers {
  public product: ProductsServices;

  constructor() {
    this.product = new ProductsServices();
  }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.product.getAll();

    res.status(StatusCodes.OK).json(products);
  };
}
