import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = (err, req, res, _next) => {
  if (err instanceof Error && err.message === 'UNAUTHORIZED') {
    return res.status(401).json({ message: 'Email ou/e senha incorretos' });
  }
  return res.status(500).json({ message: 'Erro inesperado' });
};

export default errorMiddleware;