/* eslint-disable import/extensions */
export { default as userRoutes } from './userRoutes.js';
export { default as readRoutes } from './readRoutes.js';
export { default as deleteRoutes } from './deleteRoutes.js';
export { default as createRoutes } from './createRoutes.js';
export { default as updateRoutes } from './updateRoutes.js';
export { default as singleRoutes } from './singleRoutes.js';

export const homeRoute = (req, res) => { res.send('Hello world'); };

// export {
//   userRoutes,
//   deleteRoutes,
//   createRoutes,
//   updateRoutes,
//   readRoutes,
//   singleRoutes,
// };
