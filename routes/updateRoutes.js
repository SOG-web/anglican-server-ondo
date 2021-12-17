/* eslint-disable import/extensions,consistent-return */
// noinspection UnnecessaryLocalVariableJS

import express from 'express';
import { update } from '../controllers/controller.js';
import store from '../middlewares/multer.js';
import { checkRole, userAuth } from '../auth/auth.js';

const router = express.Router();

router.post(
  '/women',
  userAuth,
  checkRole(['admin']),
  store.single('name'),
  (req, res) => {
    const { file } = req;
    const { id, title, details, category } = req.body;

    if (!file) {
      return res.json({ success: false, err: 'Please choose files' });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const women = {
      id,
      title,
      details,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      category,
    };

    update(res, women, 'women', id);
  }
);

router.post(
  '/news',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { title, details, date, time, location, id } = req.body;

    // console.log(file);

    if (!file) {
      return res.json({ success: false, err: 'Please choose files' });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const news = {
      id,
      title,
      details,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      date,
      time,
      location,
    };

    update(res, news, 'news', id);
  }
);

router.post(
  '/event',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { title, details, date, time, location, id } = req.body;

    // console.log(file);

    if (!file) {
      return res.json({ success: false, err: 'Please choose files' });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const event = {
      id,
      title,
      details,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      date,
      time,
      location,
    };

    update(res, event, 'events', id);
  }
);

router.post(
  '/gallery',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { title, id } = req.body;

    // console.log(file);

    if (!file) {
      return res.json({ success: false, err: 'Please choose files', file });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const gallery = {
      id,
      title,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
    };

    update(res, gallery, 'gallery', id);
  }
);

router.post(
  '/church',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { name, location, id } = req.body;

    // console.log(file);

    if (!file) {
      return res.json({ success: false, err: 'Please choose files', file });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const church = {
      id,
      name,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      location,
    };

    update(res, church, 'churches', id);
  }
);

router.post(
  '/priest',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { name, position, id } = req.body;

    // console.log(file);

    if (!file) {
      return res.json({ success: false, err: 'Please choose files', file });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const priest = {
      id,
      name,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      position,
    };

    update(res, priest, 'priests', id);
  }
);

const updateRoutes = router;

export default updateRoutes;
