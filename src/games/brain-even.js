import { runGame, getRandomNumber } from '..';

const isEvenNumber = number => number % 2 === 0;

const runEven = () => {
  const min = 0;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);

  const question = randomNumber;
  const expectedAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export const runEvenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  runGame(description, runEven);
};

export default runEvenGame;
