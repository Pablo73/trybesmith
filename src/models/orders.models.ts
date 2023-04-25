import RowDataPacket from 'mysql2/typings/mysql/lib/protocol/packets/RowDataPacket';
import connection from './connection';
import { Orders } from '../types/get.orders';

async function getAllOrders(): Promise<Orders> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) AS productsIds 
    from Trybesmith.orders as o 
    INNER JOIN Trybesmith.products as p 
    ON o.id = p.order_id
    GROUP BY o.id`,
  );
  return orders as unknown as Orders;
}

export default {
  getAllOrders,
};