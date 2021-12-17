/* eslint-disable import/extensions */
// noinspection JSIgnoredPromiseFromCall,UnnecessaryLocalVariableJS

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { userLogin, userRegister } from '../auth/auth.js';

const router = express.Router();

router.post('/reg_users', (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    country: req.body.country,
    role: 'users',
  };
  // console.log(req.body);
  userRegister(newUser, 'users', res);
});

router.post('/reg_admin', (req, res) => {
  const newUser = {
    id: uuidv4(),
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    country: req.body.country,
    role: 'admin',
  };
  // console.log(req.body);
  userRegister(newUser, 'users', res);
});

router.post('/login', (req, res) => {
  userLogin(req.body, 'users', res);
});

const userRoutes = router;

export default userRoutes;
