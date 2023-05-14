import { config } from 'dotenv';
config();


export const SECRET = 'efkug54$uvgc98';

export const { DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE, DB_HOST, PORT } = process.env;
