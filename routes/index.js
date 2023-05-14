/* eslint-disable import/extensions */
import express from 'express';

export { default as userRoutes } from './userRoutes.js';
export { default as readRoutes } from './readRoutes.js';
export { default as deleteRoutes } from './deleteRoutes.js';
export { default as createRoutes } from './createRoutes.js';
export { default as updateRoutes } from './updateRoutes.js';
export { default as singleRoutes } from './singleRoutes.js';

export const homeRoutes = express.Router();

homeRoutes.get('/', (_req, res) => {
    res.send('Hello world');
});

homeRoutes.get('/api', (_req, res) => {
    res.send('Api root');
});
