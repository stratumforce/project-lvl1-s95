#!/usr/bin/env node
import readlineSync from 'readline-sync';

export default() => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};
