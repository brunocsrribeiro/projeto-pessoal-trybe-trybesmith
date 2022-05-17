import express from 'express';
import ProductsControllers from '../controllers/products.controllers';
import Validated from '../middlewares/validations/products.validations';

const productRoutes = express.Router();

const productsController = new ProductsControllers();

productRoutes
  .get('/', productsController.getAll)
  .post('/', Validated, productsController.create);

export default productRoutes;
