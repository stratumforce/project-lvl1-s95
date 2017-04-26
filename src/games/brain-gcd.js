import { runGame, getRandomNumber } from '..';

const calcGcd = (num1, num2) => (!num2 ? num1 : calcGcd(num2, num1 % num2));

export const runGcd = () => {
  // Наибольший общий делитель существует и однозначно определён,
  // если хотя бы одно из чисел не равно нулю.
  const min = 1;
  const max = 100;

  const randomNumber1 = getRandomNumber(min, max);
  const randomNumber2 = getRandomNumber(min, max);

  const question = `${randomNumber1} ${randomNumber2}`;

  const expectedAnswer = calcGcd(randomNumber2, randomNumber1);

  return [question, expectedAnswer.toString()];
};

export const runGcdGame = () => {
  runGame('brain-gcd', runGcd);
};

export default runGcdGame;
