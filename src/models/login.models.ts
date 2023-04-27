import RowDataPacket from 'mysql2/typings/mysql/lib/protocol/packets/RowDataPacket';
import connection from './connection';
import { Login, User } from '../types/login.insert';

async function getUser(value: Login): Promise<User | null> {
  const [user] = await connection.execute<RowDataPacket[]>(
    'SELECT * from Trybesmith.users WHERE  username = ? AND password = ?',
    [value.username, value.password],
  );
  if (user.length === 0) {
    return null;
  }
  return user as User;
}
  
export default {
  getUser,
};