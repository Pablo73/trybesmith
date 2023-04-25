import usersModels from '../models/users.models';
import { Users } from '../types/users.type';
import authToke from '../utils/auth';

async function insertUser(value: Users): Promise<string> {
  const user = await usersModels.getAllProduct(value);
  if (!user || user.password !== value.password) {
    throw new Error('UNAUTHORIZED');
  }
  const token = await authToke.generateToke({
    id: user.id,
    username: user.username,
    vocation: user.vocation,
    level: user.level,
    password: '',
  });
  return token as unknown as string;
}

export default {
  insertUser,
};