/* eslint-disable import/extensions */
// noinspection UnnecessaryLocalVariableJS

import express from 'express';
import { remove } from '../controllers/controller.js';
import { checkRole, userAuth } from '../auth/auth.js';

const router = express.Router();

router.delete('/women', userAuth, checkRole(['admin']), (req, res) => {
  const { id, image } = req.body;

  // TODO -> delete the image file from the public/upload folder

  remove(res, 'women', id);
});

router.delete('/news', userAuth, checkRole(['admin']), (req, res) => {
  const { id } = req.body;

  remove(res, 'news', id);
});

router.delete('/event', userAuth, checkRole(['admin']), (req, res) => {
  const { id } = req.body;

  remove(res, 'event', id);
});

router.delete('/gallery', userAuth, checkRole(['admin']), (req, res) => {
  const { id } = req.body;

  remove(res, 'gallery', id);
});

router.delete('/church', userAuth, checkRole(['admin']), (req, res) => {
  const { id } = req.body;

  remove(res, 'churches', id);
});

router.delete('/priest', userAuth, checkRole(['admin']), (req, res) => {
  const { id } = req.body;

  remove(res, 'priests', id);
});

const deleteRoutes = router;

export default deleteRoutes;
