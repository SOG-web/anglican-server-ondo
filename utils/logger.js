import chalk from 'chalk';

const { greenBright, red, yellow } = chalk;

export const success = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`${greenBright(...params)}`);
  }
};

export const info = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`${yellow(...params)}`);
  }
};

export const errors = (...params) => {
  if (process.env.NODE_ENV !== 'test') {
    console.log(`${red(...params)}`);
  }
};
