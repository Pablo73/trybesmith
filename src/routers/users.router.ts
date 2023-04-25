import { Router } from 'express';
import insertUser from '../controllers/users.controllers';
import { 
  validatesIfKeysExist,
  validatesIfLevelExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters,
} from '../middlewares/users.middleware';

const userRouter = Router();

userRouter.post(
  '/users', 
  validatesIfKeysExist,
  validatesIfLevelExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters, 
  insertUser.insertUser,
);

export default userRouter;