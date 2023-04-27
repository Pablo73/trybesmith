import { Request, Response } from 'express';
import authToken from '../utils/auth';
import ordersServices from '../services/orders.services';

async function insertUser(_req: Request, res: Response) {
  const orders = await ordersServices.getOrders();
  return res.status(200).json(orders);
}

async function newOrder(req: Request, res: Response) {
  const { body } = req;
  const { authorization } = req.headers;

  if (authorization) {
    const idUser = authToken.validateToken(authorization);
  
    const orders = await ordersServices.ordersInsert(idUser, body.productsIds);
    return res.status(201).json(orders);
  }
}
  
export default {
  insertUser,
  newOrder,
};