import ordersModules from '../models/orders.models';
import { Orders, NewOrder } from '../types/get.orders';
import { NewUsers } from '../types/users.type';

async function getOrders(): Promise<Orders[]> {
  const products = await ordersModules.getAllOrders();
  return products;
}

async function ordersInsert(idUser: NewUsers, products: Array<number>): Promise<NewOrder> {
  const product = await ordersModules.insertNewOrders(idUser.id, products);
  return product as unknown as NewOrder;
}

export default {
  getOrders,
  ordersInsert,
};