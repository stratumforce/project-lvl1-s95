#!/usr/bin/node
import readlineSync from 'readline-sync';

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
};
