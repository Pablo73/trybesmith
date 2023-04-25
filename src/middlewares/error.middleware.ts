import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof Error && err.message === 'Username or password invalid') {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  return res.status(500).json({ message: 'Erro inesperado' });
};

export default errorMiddleware;