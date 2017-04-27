import runGame from '../index';
import { getRandomNumber } from '../functions';

const description = 'Answer "yes" if number even otherwise answer "no".';

const min = 0;
const max = 100;

const isEvenNumber = number => number % 2 === 0;

const runEven = () => {
  const randomNumber = getRandomNumber(min, max);

  const question = randomNumber;
  const expectedAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default() => {
  runGame(description, runEven);
};
