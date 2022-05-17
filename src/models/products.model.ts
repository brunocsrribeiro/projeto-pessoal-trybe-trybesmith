import { Pool } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IProducts[]> => {
    const resultProduct = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    const [products] = resultProduct;

    return products as IProducts[];
  };
}
