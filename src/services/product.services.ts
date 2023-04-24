import { insertProduct as postProduct } from '../models';
import { InputProduct } from '../types/post.product';

async function insertProduct(value: InputProduct) {
  const products = await postProduct(value);
  return products;
}

export default {
  insertProduct,
};