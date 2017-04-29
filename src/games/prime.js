import runGame from '..';
import { getRandomNumber } from '../functions';

const description = 'Answer "yes" if number prime otherwise answer "no".';

const min = 0;
const max = 100;

const isPrimeNumber = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return true;
};

const runPrime = () => {
  const randomNumber = getRandomNumber(min, max);

  const question = randomNumber;
  const expectedAnswer = isPrimeNumber(randomNumber) ? 'yes' : 'no';

  return [question, expectedAnswer.toString()];
};

export default() => {
  runGame(description, runPrime);
};
