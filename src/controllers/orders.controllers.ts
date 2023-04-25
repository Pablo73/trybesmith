import { Request, Response } from 'express';
import ordersServices from '../services/orders.services';

async function insertUser(req: Request, res: Response) {
  const orders = await ordersServices.getOrders();
  return res.status(200).json(orders);
}
  
export default {
  insertUser,
};