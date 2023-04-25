import { Request, Response, NextFunction } from 'express';

async function validatesIfKeysExist(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!body.vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  if (!body.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  return next();
}

async function validatesIfLevelExist(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (!body.level && body.level !== 0) {
    return res.status(400).json({ message: '"level" is required' });
  }
  return next();
}
  
async function validateseysAreTheCorrectType(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (typeof body.username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (typeof body.vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (typeof body.level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (typeof body.password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
  return next();
}
  
async function valuesHaveMoreTwoCharacters(req: Request, res: Response, next: NextFunction) {
  const { body } = req;
  if (body.username.length <= 2) {
    return res.status(422).json({ 
      message: '"username" length must be at least 3 characters long' });
  }
  if (body.vocation.length <= 2) {
    return res.status(422).json({ 
      message: '"vocation" length must be at least 3 characters long' });
  }
  if (body.level < 1) {
    return res.status(422).json({ message: '"level" must be greater than or equal to 1' });
  }
  if (body.password.length <= 8) {
    return res.status(422).json({ 
      message: '"password" length must be at least 8 characters long' });
  }
  return next();
}
  
export {
  validatesIfKeysExist,
  validatesIfLevelExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters,
};