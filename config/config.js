import dotenv from 'dotenv';

dotenv.config();

export const PORT = 3000;

export const { DB_USER } = process.env;

export const { DB_PASSWORD } = process.env;

export const { DB_PORT } = process.env;

export const { DB_DATABASE } = process.env;

export const SECRET = 'efkug54$uvgc98';

// export const MONGODB_URI =
//   process.env.NODE_ENV === "test" ? process.env.TEST_URI : process.env.URI;
