import readlineSync from 'readline-sync';

export const welcomeMessage = (caller) => {
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

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const isEvenNumber = number => number % 2 === 0;

export const runBrainGames = () => {
  welcomeMessage('brain-games');
  getUsername();
};

export const runEvenGame = () => {
  welcomeMessage('brain-even');
  const username = getUsername();

  for (let i = 0; i < 3; i += 1) {
    const min = 0;
    const max = 100;
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
