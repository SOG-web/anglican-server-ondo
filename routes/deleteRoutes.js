/* eslint-disable import/extensions,consistent-return */
// noinspection UnnecessaryLocalVariableJS

import express from 'express';
import { unlink } from 'fs';
import { remove } from '../controllers/controller.js';
import { checkRole, userAuth } from '../auth/auth.js';

const router = express.Router();

router.delete('/women', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'women', id);
  });
});

router.delete('/news', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'news', id);
  });
});

router.delete('/event', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'events', id);
  });
});

router.delete('/gallery', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'gallery', id);
  });
});

router.delete('/church', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'churches', id);
  });
});

router.delete('/priest', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  unlink(`public/uploads/${image}`, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Error deleting the image',
      });
    }
    remove(res, 'priests', id);
  });
});

export default router;
