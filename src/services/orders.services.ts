import ordersModules from '../models/orders.models';
import { Orders } from '../types/get.orders';

async function getOrders(): Promise<Orders> {
  const products = await ordersModules.getAllOrders();
  return products;
}

export default {
  getOrders,
};