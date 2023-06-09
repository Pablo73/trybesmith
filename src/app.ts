import express from 'express';
import 'express-async-errors';
import productRouter from './routers/product.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.router';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use('/', productRouter);
app.use('/', usersRouter);
app.use('/', ordersRouter);
app.use('/', loginRouter);

app.use(errorMiddleware);

export default app;
