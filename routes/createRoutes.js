/* eslint-disable import/extensions,consistent-return */
// noinspection DuplicatedCode

import express from 'express';
import dateFnsTz from 'date-fns-tz';
import { post } from '../controllers/controller.js';
import store from '../middlewares/multer.js';
import { checkRole, userAuth } from '../auth/auth.js';

const router = express.Router();

const { utcToZonedTime, format } = dateFnsTz;

// const newDate = new Date();
// const timeZone = 'Africa/Lagos';
// const zonedDate = utcToZonedTime(newDate, timeZone);

// const formattedDate = format(zonedDate, 'yyyy-MM-dd');
// const formattedTime = format(zonedDate, 'h:mm a');
// const formattedMonth = format(zonedDate, 'MMMM');

router.post(
  '/women',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { title, details, category, id } = req.body;

    // console.log(file);

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

    post(res, women, 'women');
  }
);

router.post(
  '/news',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    // console.log(req);
    const { title, details, location, id } = req.body;

    // console.log(file);

    const newDate = new Date();
    const timeZone = 'Africa/Lagos';
    const zonedDate = utcToZonedTime(newDate, timeZone);

    const formattedMonth = format(zonedDate, 'MMMM');
    const formattedDate = format(zonedDate, 'yyyy-MM-dd');
    const formattedTime = format(zonedDate, 'h:mm a');

    if (!file) {
      return res
        .status(404)
        .json({ success: false, err: 'Please choose files' });
    }
    // generating the url of the server
    const url = `${req.protocol}://${req.get('host')}`;

    const news = {
      id,
      title,
      details,
      imageUrl: `${url}/public/uploads/${file.filename}`,
      image: file.filename,
      date: formattedDate,
      time: formattedTime,
      location,
      month: formattedMonth,
    };

    post(res, news, 'news');
    // res.json({ success: true, data: news });
  }
);

router.post(
  '/event',
  userAuth,
  checkRole(['admin']),
  store.single('image'),
  (req, res) => {
    const { file } = req;
    const { title, details, date, time, id, location } = req.body;

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
      month: 'might be removed',
    };

    post(res, event, 'events');
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

    const newDate = new Date();
    const timeZone = 'Africa/Lagos';
    const zonedDate = utcToZonedTime(newDate, timeZone);

    const formattedMonth = format(zonedDate, 'MMMM');

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
      month: formattedMonth,
      monthCreated: formattedMonth,
    };

    post(res, gallery, 'gallery');
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

    post(res, church, 'churches');
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

    // console.log(req.body);

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

    post(res, priest, 'priests');
  }
);

export default router;
