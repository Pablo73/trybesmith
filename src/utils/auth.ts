import jwt, { SignOptions } from 'jsonwebtoken';
import { NewUsers } from '../types/users.type';

const secretKey = process.env.JWT_SECRET || 'secret';

const configJWT = {
  expiresIn: '8d',
  algorithm: 'HS256',
} as SignOptions;

function generateToke(payload: NewUsers): string {
  const token = jwt.sign(payload, secretKey, configJWT);
  return token as unknown as string;
}

function validateToken(token: string): NewUsers {
  const valid = jwt.verify(token, secretKey);
  return valid as unknown as NewUsers;
}

function decoderToken(token: string): NewUsers {
  const valid = jwt.decode(token);
  return valid as unknown as NewUsers;
}

export default {
  generateToke,
  validateToken,
  decoderToken,
};