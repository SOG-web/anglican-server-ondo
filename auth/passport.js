/* eslint-disable import/extensions */
import { log } from 'debug';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { getById } from '../db/dbOperation.js';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'efkug54$uvgc98',
};

// eslint-disable-next-line import/prefer-default-export
export const passAuth = (passport) => {
  // console.log("pass begin");
  passport.use(
    new Strategy(opts, async (payload, done) => {
      // console.log(payload)
      await getById(payload.user_id, 'users')
        .then((user) => {
          // console.log(user[0].id);
          if (user[0].id === payload.user_id) {
            // console.log(`user: ${true}`);
            return done(null, user);
          }
          log(`user: ${false}`);
          return done(null, false);
        })
        .catch((err) => {
          log(`user: ${false}`);
          log(err);
          return done(null, false);
        });
    })
  );
};
