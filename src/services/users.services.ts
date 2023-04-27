import usersModels from '../models/users.models';
import { Users } from '../types/users.type';
import authToke from '../utils/auth';

async function insertUser(value: Users): Promise<string> {
  const user = await usersModels.insertNewUser(value);
  const token = authToke.generateToke({
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
    password: '',
  });
  return token as string;
}

export default {
  insertUser,
};