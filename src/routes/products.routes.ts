import express from 'express';
import ProductsControllers from '../controllers/products.controllers';
import Validations from '../middlewares/validations/products.validations';

const productRoutes = express.Router();

const productsController = new ProductsControllers();
const validated = new Validations();

productRoutes
  .get('/', productsController.getAll)
  .post('/', validated.Validated, productsController.create);

export default productRoutes;
