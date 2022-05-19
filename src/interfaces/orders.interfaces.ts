export interface IOrders {
  id: number;
  userId: number;
}

export interface IProductsId extends IOrders {
  productsIds: Array<number>,
}