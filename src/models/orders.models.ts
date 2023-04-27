import OkPacket from 'mysql2/typings/mysql/lib/protocol/packets/OkPacket';
import RowDataPacket from 'mysql2/typings/mysql/lib/protocol/packets/RowDataPacket';
import connection from './connection';
import { Orders } from '../types/get.orders';

async function getAllOrders(): Promise<Orders[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) AS productsIds 
    from Trybesmith.orders as o 
    INNER JOIN Trybesmith.products as p 
    ON o.id = p.order_id
    GROUP BY o.id`,
  );
  return orders as Orders[];
}

async function insertNewOrders(id: number, products: Array<number>) {
  const [{ insertId }] = await connection
    .execute<OkPacket>('INSERT INTO Trybesmith.orders(user_id) VALUES (?)', [id]);

  const updateProduct = products.map(async (ele) => {
    const queryOrders = 'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?';
    return connection.execute<OkPacket>(queryOrders, [insertId, ele]);
  });

  await Promise.all(updateProduct);

  const newOrders = { 
    userId: id,
    productsIds: products,
  };
  return newOrders;
}

export default {
  getAllOrders,
  insertNewOrders,
};