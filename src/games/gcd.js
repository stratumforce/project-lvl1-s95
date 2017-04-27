import runGame from '../index';
import { getRandomNumber } from '../functions';

const description = 'Find the greatest common divisor of given numbers.';

// Наибольший общий делитель существует и однозначно определён,
// если хотя бы одно из чисел не равно нулю.
const min = 1;
const max = 100;

const calcGcd = (num1, num2) => (!num2 ? num1 : calcGcd(num2, num1 % num2));

const runGcd = () => {
  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);

  const question = `${randomNumber1} ${randomNumber2}`;

  const expectedAnswer = calcGcd(randomNumber2, randomNumber1);

  return [question, expectedAnswer.toString()];
};

export default() => {
  runGame(description, runGcd);
};
