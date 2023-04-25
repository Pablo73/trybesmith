import { Router } from 'express';
import loginControllers from '../controllers/login.controllers';

const userRouter = Router();

userRouter.post('/login', loginControllers.validationUser);

export default userRouter;