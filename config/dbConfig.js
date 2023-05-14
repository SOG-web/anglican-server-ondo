/* eslint-disable import/extensions */
import mysql from 'mysql2/promise';
import * as db from './config.js';

/**
 * TODO -> Create the database
 */

// const pool = mysql.createPool({
//   host: '31.172.80.159',
//   user: 'admin_5xxl8',
//   password: 'JNfWx9hPq6NxRYsP',
//   database: 'admin_5xxl8',
//   // port: 3306,
//   // waitForConnections: true,
//   // connectionLimit: 2000,
//   connectionLimit: 1000,
//   connectTimeout: 60 * 60 * 1000,
//   acquireTimeout: 60 * 60 * 1000,
//   timeout: 60 * 60 * 1000,
// });
const pool = mysql.createPool({
  host: '212.224.86.90',
  user: 'admin_dvcsssco',
  password: 'dvcsssc?!o1',
  database: 'anglican_ondo',
  port: 5549,
  waitForConnections: true,
  connectionLimit: 2000,
  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000,
});

export default mysql.createPool({
  host: db.DB_HOST,
  user: db.DB_USER,
  port: db.DB_PORT,
  connectionLimit: 8000,
  waitForConnections: true,
  database: db.DB_DATABASE,
  password: db.DB_PASSWORD,
});
