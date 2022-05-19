import { IProductsId } from '../interfaces/orders.interfaces';
import Connection from '../models/connection';
import OrdersModel from '../models/orders.model';

export default class OrdersServices {
  public order: OrdersModel;

  constructor() {
    this.order = new OrdersModel(Connection);
  }

  async getAll(): Promise<IProductsId[]> {
    const orders = await this.order.getAll();
    return orders;
  }
}