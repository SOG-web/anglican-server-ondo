/* eslint-disable import/extensions */
import mysql from 'mysql2/promise';
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER } from './config.js';

/**
 * TODO -> Create the database
 */

const pool = mysql.createPool({
  host: 'localhost',
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
