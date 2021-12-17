/* eslint-disable import/extensions */
/* eslint-disable consistent-return */
// noinspection JSUnusedGlobalSymbols

import bcrypt from 'bcryptjs';
import { log } from 'debug';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { SECRET } from '../config/config.js';
import { getByPred, insertData } from '../db/dbOperation.js';

/**
 * @DESC To register the user
 */

const validateUsername = async (username, tablename) => {
  const user = await getByPred(username, 'username', tablename);
  log(`username on registration : ${user.length}`);
  return user.length !== 0;
};

const validateEmail = async (email, tablename) => {
  const user = await getByPred(email, 'email', tablename);
  log(`email on registration : ${user.length}`);
  return user.length !== 0;
};

export const userRegister = async (userData, tablename, res) => {
  try {
    // Validate the username
    const usernameNotTaken = await validateUsername(
      userData.username,
      tablename
    );
    if (usernameNotTaken) {
      return res.status(400).json({
        message: 'Username already exist',
        success: false,
      });
    }

    // validate the email
    const emailNotRegistered = await validateEmail(userData.email, tablename);
    if (emailNotRegistered) {
      return res.status(400).json({
        message: `Email is already registered.`,
        success: false,
      });
    }

    // log(userData);

    // Get the hashed password
    const hashedPassword = await bcrypt.hash(userData.password, 12);

    // create a new user
    const newUser = {
      ...userData,
      password: hashedPassword,
    };

    insertData(newUser, tablename).then((result) =>
      res.status(201).json({
        result,
        message:
          'Hurry! now you are successfully registered. Please now login.',
        success: true,
      })
    );
  } catch (err) {
    // Implement logger function (winston)
    log(err);
    return res.status(500).json({
      message: 'Unable to create your account.',
      success: false,
    });
  }
};

/**
 * @DESC To Login the user
 */
export const userLogin = async (userCreds, tablename, res) => {
  try {
    const { username, password } = userCreds;
    // First Check if the username is in the database
    const user = await getByPred(username, 'username', tablename);
    if (user.length === 0) {
      return res.json({
        message: 'Username is not found. Invalid login credentials.',
        success: false,
      });
    }

    /**
     * That means user is existing
     * Now check for the password
     */
    const isMatch = await bcrypt.compare(password, user[0].password);
    if (isMatch) {
      // Sign in the token and issue it to the user
      const token = jwt.sign(
        {
          user_id: user[0].id,
          role: user[0].role,
          username: user[0].username,
          email: user[0].email,
        },
        SECRET,
        { expiresIn: '7 days' }
      );

      const result = {
        user: {
          id: user[0].id,
          username: user[0].username,
          role: user[0].role,
          email: user[0].email,
        },
        token: `Bearer ${token}`,
        expiresIn: 168,
      };

      return res.status(200).json({
        ...result,
        message: 'Hurray! You are now logged in.',
        success: true,
      });
    }
    return res.json({
      message: 'Incorrect password.',
      success: false,
    });
  } catch (error) {
    log(`login: ${error}`);
    return res.status(500).json({
      message: 'Some error occur.',
      success: false,
    });
  }
};

/**
 * @DESC Passport middleware
 */
export const userAuth = passport.authenticate('jwt', { session: false });

/**
 * @DESC Check Role Middleware
 */
export const checkRole = (roles) => (req, res, next) => {
  // log(req);
  // eslint-disable-next-line no-unused-expressions
  !roles.includes(req.user[0].role) ? res.json('Unauthorized passage') : next();
};
