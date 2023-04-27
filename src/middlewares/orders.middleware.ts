import { Request, Response, NextFunction } from 'express';
import authToken from '../utils/auth';

async function validatesKey(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }
  return next();
}

async function validatesIsArray(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!Array.isArray(body.productsIds)) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  return next();
}

async function validatesIsArrayOfNumber(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (body.productsIds.length === 0 
    || body.productsIds.some((value: number) => typeof value !== 'number')) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return next();
}

async function validatestoken(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  try {
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    await authToken.validateToken(authorization);
    return next();
  } catch (error) { return res.status(401).json({ message: 'Invalid token' }); }
}

export {
  validatestoken,
  validatesKey,
  validatesIsArray,
  validatesIsArrayOfNumber,
};