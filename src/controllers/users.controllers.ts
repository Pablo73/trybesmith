import { Request, Response } from 'express';
import usersServices from '../services/users.services';

async function insertUser(req: Request, res: Response) {
  const { body } = req;
  const user = await usersServices.insertUser(body);
  return res.status(201).json({ token: user });
}

export default {
  insertUser,
};