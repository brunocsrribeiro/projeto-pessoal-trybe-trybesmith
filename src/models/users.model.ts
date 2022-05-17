import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async create(user: IUsers): Promise<IUsers> {
    const { username, classe, level, password } = user;
    const resultUser = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users (username, classe, level, password)
        VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );

    const [userInserted] = resultUser;
    const { insertId } = userInserted;
    return {
      id: insertId,
      username,
      classe,
      level,
      password,
    };
  }
}
