import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import IUsers from '../interfaces/users.interface';
import Connection from '../models/connection';
import UsersModel from '../models/users.model';

dotenv.config();

export default class UsersServices {
  public user: UsersModel;

  constructor() {
    this.user = new UsersModel(Connection);
  }

  async create(user: IUsers): Promise<string> {
    const createUser = await this.user.create(user);

    const SECRET = process.env.JWT_SECRET || 'secrets';

    const { password, ...userWithoutPassword } = createUser;

    const token: string = sign(
      { data: userWithoutPassword },
      SECRET,
      { algorithm: 'HS256' },

    );

    return token;
  }
}
