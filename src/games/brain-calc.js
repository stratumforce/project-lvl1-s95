import { runGame, getRandomNumber } from '..';

const availableOperations = ['+', '-', '*'];

export const runCalc = () => {
  const min = 0;
  let max = 50;
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);

  max = 2;
  const operation = availableOperations[getRandomNumber(min, max)];

  const question = `${randomNumber1} ${operation} ${randomNumber2}`;
  let expectedAnswer = '';

  switch (operation) {
    case availableOperations[0]:
      expectedAnswer = randomNumber1 + randomNumber2; break;
    case availableOperations[1]:
      expectedAnswer = randomNumber1 - randomNumber2; break;
    case availableOperations[2]:
      expectedAnswer = randomNumber1 * randomNumber2; break;
    default:
  }

  return [question, expectedAnswer.toString()];
};

export const runCalcGame = () => {
  runGame('brain-calc', runCalc);
};

export default runCalcGame;
