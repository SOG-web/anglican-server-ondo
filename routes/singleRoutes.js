/* eslint-disable import/extensions */
import express from 'express';
import { getByPredicate } from '../controllers/controller.js';

const router = express.Router();

router.post('/women', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'women', 'id', id);
});
router.post('/news', (req, res) => {
  const { id } = req.body;
  // console.log(req.body);
  getByPredicate(res, 'news', 'id', id);
});
router.post('/event', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'event', 'id', id);
});
router.post('/gallery', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'gallery', 'id', id);
});
router.post('/churches', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'churches', 'id', id);
});
router.post('/priests', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'priests', 'id', id);
});
router.post('/members', (req, res) => {
  const { id } = req.body;
  getByPredicate(res, 'users', 'id', id);
});

const singleRoutes = router;

export default singleRoutes;
