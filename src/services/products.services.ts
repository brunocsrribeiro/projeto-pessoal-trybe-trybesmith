import IProducts from '../interfaces/products.interface';
import Connection from '../models/connection';
import ProductsModel from '../models/products.model';

export default class ProductsServices {
  public product: ProductsModel;

  constructor() {
    this.product = new ProductsModel(Connection);
  }

  async getAll(): Promise<IProducts[]> {
    const products = await this.product.getAll();
    return products;
  }

  async create(product: IProducts): Promise<IProducts> {
    return this.product.create(product);
  }
}
