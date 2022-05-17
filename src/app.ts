import express from 'express';
import error from './middlewares/middlewares.errors';
import productRoutes from './routes/products.routes';
import userRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

app
  .use('/products', productRoutes)
  .use('/users', userRoutes);

app.use(error);

export default app;
