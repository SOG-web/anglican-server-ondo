/* eslint-disable import/extensions */
// noinspection UnnecessaryLocalVariableJS
import express from 'express';
import { get, getByPredicate } from '../controllers/controller.js';

const router = express.Router();

router.get('/women', (_req, res) => {
  get(res, 'women');
});

router.get('/events', (_req, res) => {
  get(res, 'events');
});

router.get('/gallery', (_req, res) => {
  get(res, 'gallery');
});

router.get('/news', (_req, res) => {
  get(res, 'news');
});

router.get('/churches', (_req, res) => {
  get(res, 'churches');
});

router.get('/priests', (_req, res) => {
  get(res, 'priests');
});

router.get('/members', (_req, res) => {
  getByPredicate(res, 'users', 'role', 'members');
});

export default router;
