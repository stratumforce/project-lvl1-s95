import readlineSync from 'readline-sync';

const printWelcomeMessage = () => console.log('Welcome to the Brain Games!');
export default printWelcomeMessage;

export const getUsername = () => readlineSync.question('\nMay I have your name? ');
export const printGreeting = username => console.log(`Hello, ${username}!\n`);

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
