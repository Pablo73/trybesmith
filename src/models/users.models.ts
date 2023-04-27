import ResultSetHeader from 'mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader';
import { Users, NewUsers } from '../types/users.type';
import connection from './connection';

async function insertNewUser(value: Users): Promise<NewUsers> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [value.username, value.vocation, value.level, value.password],
  );
  const newUser = { 
    id: insertId,
    username: value.username,
    vocation: value.vocation,
    level: value.level,
    password: value.password,
  };
  return newUser as NewUsers;
}

export default {
  insertNewUser,
};