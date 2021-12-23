/* eslint-disable import/extensions */
// noinspection UnnecessaryLocalVariableJS

import express from 'express';
import { get, getByPredicate } from "../controllers/controller.js";

const router = express.Router();

router.get('/women', (req, res) => {
  get(res, 'women');
});

router.get('/events', (req, res) => {
  get(res, 'events');
});

router.get('/gallery', (req, res) => {
  get(res, 'gallery');
});

router.get('/news', (req, res) => {
  get(res, 'news');
});

router.get('/churches', (req, res) => {
  get(res, 'churches');
});

router.get('/priests', (req, res) => {
  get(res, 'priest');
});

router.get('/members', (req, res) => {
  getByPredicate(res, 'users', 'role', 'members');
});

const readRoutes = router;

export default readRoutes;
