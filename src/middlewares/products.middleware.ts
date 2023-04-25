import { Request, Response, NextFunction } from 'express';

async function validatesIfKeysExist(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!body.amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  return next();
}

async function validateseysAreTheCorrectType(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (typeof body.name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (typeof body.amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  return next();
}

async function valuesHaveMoreTwoCharacters(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (body.name.length <= 2) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (body.amount.length <= 2) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  return next();
}

export {
  validatesIfKeysExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters,
};