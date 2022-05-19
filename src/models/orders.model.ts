import { Pool, RowDataPacket } from 'mysql2/promise';
import { IProductsId } from '../interfaces/orders.interfaces';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll(): Promise<IProductsId[]> {
    const resultOrder = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Orders',
    );
    
    const resultProduct = await this.connection.execute<RowDataPacket[]>(
      'SELECT id, orderId FROM Trybesmith.Products',
    );

    const [orders] = resultOrder;
    const [products] = resultProduct;

    const getAllResults = orders.map((order) => ({
      id: order.id,
      userId: order.userId,
      productsIds: products.filter((product) => (
        product.orderId === order.id ? product.id : null
      )).map((productId) => productId.id),
    }));

    return getAllResults as IProductsId[];
  }
}
