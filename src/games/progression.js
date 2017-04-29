import runGame from '..';
import { getRandomNumber } from '../functions';

const description = 'What number is missing in this progression?';

const min = -10;
const max = 10;
const progressionLength = 10;

const runProgression = () => {
  const step = getRandomNumber(min, max);
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);

  const numbers = [getRandomNumber(min, max)];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    const newNumber = numbers[i] + step;
    numbers.push(newNumber);
  }

  const expectedAnswer = numbers[hiddenIndex];
  numbers[hiddenIndex] = '..';
  const question = numbers.join(' ');

  return [question, expectedAnswer.toString()];
};

export default() => {
  runGame(description, runProgression);
};
