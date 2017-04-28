import readlineSync from 'readline-sync';

export default() => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);
};
