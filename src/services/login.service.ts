import { Login } from '../types/login.insert';
import loginModels from '../models/login.models';
import authToke from '../utils/auth';

async function validationUser(value: Login): Promise<string> {
  const user = await loginModels.getUser(value);
  if (!user) {
    throw new Error('Username or password invalid');
  }
  const token = authToke.generateToke({
    id: user[0].id,
    username: user[0].username,
    vocation: user[0].vocation,
    level: user[0].level,
    password: '',
  });
  return token as string;
}
  
export default {
  validationUser,
};