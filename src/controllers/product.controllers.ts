import { Request, Response } from 'express';
import productServices from '../services/product.services';

async function insertProduct(req: Request, res: Response) {
  const { body } = req;
  const product = await productServices.insertProduct(body);
  return res.status(201).json(product);
}

async function allProduct(req: Request, res: Response) {
  const product = await productServices.getAllProduct();
  return res.status(200).json(product);
}

export default {
  insertProduct,
  allProduct,
};