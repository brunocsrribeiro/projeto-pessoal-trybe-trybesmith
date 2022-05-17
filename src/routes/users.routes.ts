import express from 'express';
import UsersControllers from '../controllers/users.controllers';
import Validations from '../middlewares/validations/users.validations';

const userRoutes = express.Router();

const usersControllers = new UsersControllers();
const validated = new Validations();

userRoutes
  .post(
    '/',
    validated.ValidStrings,
    validated.ValidNumbers,
    usersControllers.create,
  );

export default userRoutes;
