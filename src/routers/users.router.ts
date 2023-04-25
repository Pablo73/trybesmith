import { Router } from 'express';
import insertUser from '../controllers/users.controllers';

const userRouter = Router();

userRouter.post('/users', insertUser.insertUser);

export default userRouter;