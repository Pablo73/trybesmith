import ResultSetHeader from 'mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader';
import { InputProduct, Product } from '../types/post.product';
import connection from './connection';

async function insertProduct(value: InputProduct): Promise<Product> {
  const [newProduct] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO products(name, amount) VALUES (?, ?)',
    [value.name, value.amount],
  );
  return newProduct as unknown as Product;
}

export default {
  insertProduct,
};