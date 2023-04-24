import { Request, Response } from 'express';
import productServices from '../services/product.services';

async function insertProduct(req: Request, res: Response) {
  const { body } = req;
  const product = await productServices.insertProduct(body);
  return res.status(201).json(product);
}

export default {
  insertProduct,
};