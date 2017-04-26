import readlineSync from 'readline-sync';

// welcomeMessage, greeting - функции описывают действия (get, show, check etc),
// а действия в русском языке описываются глаголами.

const printWelcomeMessage = (caller) => {
  let output = 'Welcome to the Brain Games!';

  switch (caller) {
    case 'brain-games':
      output += '\n'; break;
    case 'brain-even':
      output += '\nAnswer "yes" if number even otherwise answer "no".\n'; break;
    case 'brain-calc':
      output += '\nWhat is the result of the expression?\n'; break;
    case 'brain-gcd':
      output += '\nFind the greatest common divisor of given numbers.\n'; break;
    default:
  }

  console.log(output);
};

const getUsername = () => readlineSync.question('May I have your name? ');
const printGreeting = username => console.log(`Hello, ${username}!\n`);

export const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

export const runGame = (caller, gameFunc) => {
  printWelcomeMessage(caller);
  const username = getUsername();
  printGreeting(username);

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
