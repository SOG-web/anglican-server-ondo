/* eslint-disable import/extensions */
// noinspection UnnecessaryLocalVariableJS,JSUnusedGlobalSymbols

import { log } from 'debug';
import pool from '../config/dbConfig.js';

// manipulate data by custom query
export const ByQuery = async (query) => {
  try {
    const [rows] = await pool.query(query);
    return rows;
  } catch (error) {
    log(error);
    return error;
  }
};

export const getById = async (id, tableName) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM ${tableName} WHERE id = ?`, [
      id,
    ]);
    return rows;
  } catch (error) {
    return error;
  }
};

export const getByPred = async (pred, row, tableName) => {
  // pred can be any value e.g username, id, email, e.t.c
  // row can be any row on your db e.g username, id, e.t.c
  try {
    const [rows] = await pool.query(
      `SELECT * FROM ${tableName} WHERE ${row} = ?`,
      [pred]
    );
    // console.log(`Database: ${rows}`);
    return rows;
  } catch (error) {
    return error;
  }
};

// get all the data in a table
export const getAll = async (tableName) => {
  try {
    const [rows] = await pool.query(`SELECT * FROM ${tableName}`);
    return rows;
  } catch (error) {
    return error;
  }
};

// insert Data to the db
export const insertData = async (data, tableName) => {
  try {
    const result = await pool.query(`INSERT INTO ${tableName} SET ?`, data);
    // console.log(`insert: ${result}`);
    return result;
  } catch (error) {
    return error;
  }
};

// update a single column in the db
export const updateDataOne = async (data, pred, column, row, tableName) => {
  try {
    const result = await pool.query(
      `UPDATE ${tableName} SET ${column} = ? Where ${row} = ?`,
      [data, pred]
    );
    return result;
  } catch (error) {
    return error;
  }
};

// update data by id
export const updateDataById = async (data, id, tableName) => {
  try {
    const result = await pool.query(`UPDATE ${tableName} SET ? WHERE id = ?`, [
      data,
      id,
    ]);
    log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// delete data by a specific row on the db
export const deleteDataByPred = async (pred, row, tableName) => {
  try {
    const result = await pool.query(
      `DELETE FROM ${tableName} WHERE ${row} = ?`,
      [pred]
    );
    return result;
  } catch (error) {
    return error;
  }
};

// delete data by id on the db
export const deleteDataById = async (id, tableName) => {
  try {
    const result = await pool.query(`DELETE FROM ${tableName} WHERE id = ?`, [
      id,
    ]);
    return result;
  } catch (error) {
    return error;
  }
};
