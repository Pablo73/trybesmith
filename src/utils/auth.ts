import jwt from 'jsonwebtoken';
import { NewUsers } from '../types/users.type';

const secretKey = 'secret';

async function generateToke(payload: NewUsers): Promise<string> {
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '8d',
    algorithm: 'HS256',
  });
  return token as unknown as string;
}

async function validateToken(token: string): Promise<NewUsers> {
  const valid = jwt.verify(token, secretKey);
  return valid as NewUsers;
}

export default {
  generateToke,
  validateToken,
};