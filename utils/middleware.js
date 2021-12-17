/* eslint-disable import/extensions */
import { info, errors } from './logger.js';

export const requestLogger = (request, response, next) => {
  info('Method:', request.method);
  info('Path:  ', request.path);
  info('Body:  ', request.body);
  info('---');
  next();
};

export const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line consistent-return
export const errorHandler = (err, req, response, next) => {
  if (err.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    response.status(400).json({ error: err.message });
  } else if (err.name === 'JsonWebTokenError') {
    response.status(401).json({
      error: 'invalid token',
    });
  } else if (err.name === 'TokenExpiredError') {
    return response.status(401).json({
      error: 'token expired',
    });
  }
  response.send({ err: err.message });
};
