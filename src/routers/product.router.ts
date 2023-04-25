import { Router } from 'express';
import insertProduct from '../controllers/product.controllers';
import { 
  validatesIfKeysExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters,
} from '../middlewares/products.middleware';

const userRouter = Router();

userRouter.post(
  '/products', 
  validatesIfKeysExist,
  validateseysAreTheCorrectType,
  valuesHaveMoreTwoCharacters, 
  insertProduct.insertProduct,
);
userRouter.get('/products', insertProduct.allProduct);

export default userRouter;