/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
// noinspection JSIgnoredPromiseFromCall,UnnecessaryLocalVariableJS

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { userLogin, userRegister } from '../auth/auth.js';
import { post } from '../controllers/controller.js';
import store from '../middlewares/multer.js';

const router = express.Router();

router.post('/reg_users', store.single('image'), (req, res) => {
  const {
    surname,
    lastName,
    otherName,
    email,
    church,
    archdeaconry,
    phoneNumber,
    society,
    roles,
    birthDate,
    weddingAnniversary,
  } = req.body;
  const { file } = req;

  if (!file) {
    return res.json({ success: false, err: 'Please choose files' });
  }
  // generating the url of the server
  const url = `${req.protocol}://${req.get('host')}`;

  const newUser = {
    id: uuidv4(),
    surname,
    lastName,
    otherName,
    email,
    church,
    archdeaconry,
    phoneNumber,
    society,
    roles,
    birthDate,
    weddingAnniversary,
    imageUrl: `${url}/public/uploads/${file.filename}`,
    image: file.filename,
    role: 'members',
  };
  // console.log(req.body);
  post(res, newUser, 'users');
});

router.post('/reg_admin', (req, res) => {
  const { username, password, email } = req.body;

  const newUser = {
    id: uuidv4(),
    username,
    password,
    email,
    role: 'admin',
  };
  // console.log(req.body);
  userRegister(newUser, 'admin', res);
});

router.post('/login', (req, res) => {
  userLogin(req.body, 'admin', res);
});

const userRoutes = router;

export default userRoutes;
