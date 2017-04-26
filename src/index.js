import readlineSync from 'readline-sync';

const welcomeMessage = (caller) => {
  let output = 'Welcome to the Brain Games!';

  switch (caller) {
    case 'brain-games':
      output += '\n'; break;
    case 'brain-even':
      output += '\nAnswer "yes" if number even otherwise answer "no".\n'; break;
    default:
  }

  console.log(output);
};

const getUsername = () => readlineSync.question('May I have your name? ');
const greeting = username => console.log(`Hello, ${username}!`);

const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const isEvenNumber = number => number % 2 === 0;

export const runBrainGames = () => {
  welcomeMessage('brain-games');
  const username = getUsername();
  greeting(username);
};

export const runEvenGame = () => {
  welcomeMessage('brain-even');
  const username = getUsername();
  greeting(username);

  const min = 0;
  const max = 100;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(min, max);

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const expectedAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\n` +
        `Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
