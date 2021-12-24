/* eslint-disable import/extensions */
import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

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
  host: 'dvcsssco.ceeadhh1sybt.us-east-2.rds.amazonaws.com',
  user: 'admin_dvcsssco',
  password: 'dvcsssc?!o1',
  database: '',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 2000,
  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000,
});

export default pool;
