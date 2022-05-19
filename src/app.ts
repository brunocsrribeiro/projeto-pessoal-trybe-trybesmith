import express from 'express';
import error from './middlewares/middlewares.errors';
import orderRoutes from './routes/orders.routes';
import productRoutes from './routes/products.routes';
import userRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app
  .use('/products', productRoutes)
  .use('/users', userRoutes)
  .use('/orders', orderRoutes);

app.use(error);

export default app;
