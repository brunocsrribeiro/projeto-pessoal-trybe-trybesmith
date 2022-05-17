import express from 'express';
import error from './middlewares/middlewares.errors';
import productRoutes from './routes/products.routes';

const app = express();

app.use(express.json());

app
  .use('/products', productRoutes);

app.use(error);

export default app;
