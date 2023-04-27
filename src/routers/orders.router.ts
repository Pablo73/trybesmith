import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';
import {
  validatestoken,
  validatesKey,
  validatesIsArray,
  validatesIsArrayOfNumber,
} from '../middlewares/orders.middleware';

const userRouter = Router();

userRouter.get('/orders', ordersControllers.insertUser);
userRouter.post(
  '/orders', 
  validatestoken,
  validatesKey, 
  validatesIsArray, 
  validatesIsArrayOfNumber, 
  ordersControllers.newOrder,
);

export default userRouter;