/* eslint-disable import/extensions */
// noinspection JSIgnoredPromiseFromCall,UnnecessaryLocalVariableJS

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { userLogin, userRegister } from '../auth/auth.js';
import { post } from '../controllers/controller.js';

const router = express.Router();

router.post('/reg_users', (req, res) => {
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
