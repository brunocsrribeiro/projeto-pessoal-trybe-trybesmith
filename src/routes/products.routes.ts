import express from 'express';
import ProductsControllers from '../controllers/products.controllers';

const productRoutes = express.Router();

const productsController = new ProductsControllers();

productRoutes
  .get('/', productsController.getAll)
  .post('/');

export default productRoutes;
