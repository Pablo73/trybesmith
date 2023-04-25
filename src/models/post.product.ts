import ResultSetHeader from 'mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader';
import { InputProduct, Product } from '../types/post.product';
import { AllProduct } from '../types/get.product';
import connection from './connection';

async function insertProduct(value: InputProduct): Promise<Product> {
  const [{ insertId }] = await connection
    .execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products(name, amount) VALUES (?, ?)',
    [value.name, value.amount],
  );
  const valueInsert = {
    id: insertId,
    name: value.name,
    amount: value.amount,
  };
  return valueInsert as unknown as Product;
}

async function getAllProduct(): Promise<AllProduct> {
  const [getProduct] = await connection.execute<ResultSetHeader>(
    'SELECT * from Trybesmith.products',
  );
  return getProduct as unknown as AllProduct;
}

export {
  insertProduct,
  getAllProduct,
};