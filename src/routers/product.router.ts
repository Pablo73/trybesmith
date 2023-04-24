import { Router } from 'express';
import insertProduct from '../controllers/product.controllers';

const userRouter = Router();

userRouter.post('/products', insertProduct.insertProduct);

export default userRouter;