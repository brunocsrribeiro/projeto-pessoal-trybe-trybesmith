import express from 'express';
import OrdersControllers from '../controllers/orders.controllers';

const orderRoutes = express.Router();

const ordersControllers = new OrdersControllers();

orderRoutes.get('/', ordersControllers.getAll);

export default orderRoutes;
