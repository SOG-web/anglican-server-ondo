/* eslint-disable import/extensions */
import express, { json, urlencoded } from 'express';
import passport from 'passport';
// eslint-disable-next-line import/no-unresolved
import chalk from 'chalk';
import debug from 'debug';
import cors from 'cors';
import path from 'path';
import { errorHandler, requestLogger } from './utils/middleware.js';
import { passAuth } from './auth/passport.js';
import {
  createRoutes,
  deleteRoutes,
  readRoutes,
  updateRoutes,
  userRoutes,
} from './routes/index.js';

const app = express();

const log = debug('app');
const { green } = chalk;

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors());
app.use(requestLogger);

app.use(express.static(path.join(path.resolve(), 'public')));

app.use(passport.initialize());

passAuth(passport);

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api/create', createRoutes);
app.use('/api/update', updateRoutes);
app.use('/api/read', readRoutes);
app.use('/api/delete', deleteRoutes);
app.use('/api/user', userRoutes);

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

app.use(errorHandler);

app.listen(3001, () => {
  console.log(`server listing on ${green(3001)}`);
});
