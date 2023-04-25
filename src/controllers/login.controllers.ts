import { Request, Response } from 'express';
import loginServices from '../services/login.service';

async function validationUser(req: Request, res: Response) {
  const { body } = req;
  if (!body.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!body.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  const user = await loginServices.validationUser(body);
  return res.status(200).json({ token: user });
}

export default {
  validationUser,
};