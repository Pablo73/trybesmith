import { Login } from '../types/login.insert';
import loginModels from '../models/login.models';
import authToke from '../utils/auth';

async function validationUser(value: Login): Promise<string> {
  const user = await loginModels.getUser(value);
  if (!user) {
    throw new Error('Username or password invalid');
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
  validationUser,
};