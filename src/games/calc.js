import runGame from '../index';
import getRandomNumber from '../functions';

const description = 'What is the result of the expression?';
const gameRounds = 3;

const min = 0;
const max = 50;

const availableOperations = ['+', '-', '*'];

const runCalc = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);

  const operation = availableOperations[getRandomNumber(0, availableOperations.length - 1)];

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

export default() => {
  runGame(description, gameRounds, runCalc);
};
