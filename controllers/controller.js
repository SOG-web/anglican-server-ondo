/* eslint-disable import/prefer-default-export,import/extensions,consistent-return */
// noinspection JSUnusedGlobalSymbols

import {
  deleteDataById,
  getAll,
  insertData,
  updateDataById,
} from '../db/dbOperation.js';

export const home = (req, res) => {
  res.send('welcome');
};

export const get = (res, tableName) => {
  getAll(tableName)
    .then((data) => {
      res.json({ success: true, msg: data });
    })
    .catch((err) => {
      res.json({ success: false, msg: err });
    });
};

export const post = (res, data, tableName) => {
  insertData(data, tableName)
    .then((values) => {
      res.json({ success: true, msg: values });
    })
    .catch((err) => {
      res.json({ success: false, msg: err });
    });
};

export const update = (res, data, tableName, id) => {
  updateDataById(data, id, tableName)
    .then((values) => {
      res.json({ success: true, msg: values });
    })
    .catch((err) => {
      res.json({ success: false, msg: err });
    });
};

export const remove = (res, tableName, id) => {
  deleteDataById(id, tableName)
    .then((values) => {
      res.json({ success: true, msg: values });
    })
    .catch((err) => {
      res.json({ success: false, msg: err });
    });
};
