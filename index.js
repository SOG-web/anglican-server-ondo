import cors from 'cors';
import path from 'path';
import chalk from 'chalk';
import debug from 'debug';
import express from 'express';
import passport from 'passport';
import pool from './config/dbConfig.js';
import * as routes from './routes/index.js'
import { passAuth } from './auth/passport.js';
import * as middlewares from './utils/middleware.js';

const app = express();
const { green } = chalk;
const log = debug('app');
const PORT = process.env.PORT || 5000;

pool
  // databse connection
  .getConnection()
  .then(() => { log(green('Connected to the database')) })
  .catch(log);

// main configuration
app.use(cors());
app.use(express.json());
app.use(middlewares.requestLogger);
app.use(express.urlencoded({ extended: false }));

// assets files
app.use(express.static(path.join(path.resolve(), 'public')));
app.use('/public/uploads', express.static('./public/uploads'));

// passport
app.use(passport.initialize());
passAuth(passport);

// routes
app.use('/', routes.homeRoute);
app.use('/api/read', routes.readRoutes);
app.use('/api/user', routes.userRoutes);
app.use('/api/create', routes.createRoutes);
app.use('/api/update', routes.updateRoutes);
app.use('/api/delete', routes.deleteRoutes);
app.use('/api/single', routes.singleRoutes);

// error handlers
app.use(middlewares.errorHandler);
app.use(middlewares.unknownEndpoint);

app.listen(PORT, () => { log(`server listing on port ${green(PORT)}`); });
