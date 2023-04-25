import { Router } from 'express';
import ordersControllers from '../controllers/orders.controllers';

const userRouter = Router();

userRouter.get('/orders', ordersControllers.insertUser);

export default userRouter;