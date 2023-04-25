import { 
  insertProduct as postProduct,
  getAllProduct as allProduct,
} from '../models';
import { InputProduct } from '../types/post.product';

async function insertProduct(value: InputProduct) {
  const products = await postProduct(value);
  return products;
}

async function getAllProduct() {
  const products = await allProduct();
  return products;
}

export default {
  insertProduct,
  getAllProduct,
};