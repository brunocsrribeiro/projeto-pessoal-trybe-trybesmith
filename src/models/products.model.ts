import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProducts from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IProducts[]> {
    const resultProduct = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products;',
    );

    const [products] = resultProduct;

    return products as IProducts[];
  }

  async create(product: IProducts): Promise<IProducts> {
    const { name, amount } = product;
    const resultProduct = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    const [productInserted] = resultProduct;
    const { insertId } = productInserted;
    return {
      id: insertId,
      name,
      amount,
    };
  }
}
