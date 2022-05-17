import express from 'express';

const userRoutes = express.Router();

userRoutes
  .get('/')
  .post('/');

export default userRoutes;
