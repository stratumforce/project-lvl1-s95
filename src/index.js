import readlineSync from 'readline-sync';

// welcomeMessage, greeting - функции описывают действия (get, show, check etc),
// а действия в русском языке описываются глаголами.

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const runGame = (description, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) console.log(`${description}`);
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (gameFunc === undefined) return;

  for (let i = 0; i < 3; i += 1) {
    const [question, expectedAnswer] = gameFunc();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\n` +
        `Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
