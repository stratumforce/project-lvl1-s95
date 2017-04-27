import runGame from '../index';
import { getRandomNumber } from '../functions';

const description = 'Balance the given number.';

const minNumberSize = 2;
const maxNumberSize = 4;

const getHighLowValue = (arrayNumber) => {
  let highestNumber = 0;
  let lowestNumber = 9;
  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] > highestNumber) highestNumber = arrayNumber[i];
    if (arrayNumber[i] < lowestNumber) lowestNumber = arrayNumber[i];
  }
  return [highestNumber, lowestNumber];
};

const calcBalance = (unbalancedNumber) => {
  const newNumber = unbalancedNumber;

  const highLowNumber = getHighLowValue(newNumber);
  const highestValue = highLowNumber[0];
  const lowestValue = highLowNumber[1];

  const highestValueIndex = newNumber.indexOf(highestValue);
  const lowestValueIndex = newNumber.indexOf(lowestValue);

  if (highestValue - lowestValue > 1) {
    newNumber[highestValueIndex] -= 1;
    newNumber[lowestValueIndex] += 1;
    return calcBalance(newNumber);
  }

  return newNumber.sort();
};

const runBalance = () => {
  const length = getRandomNumber(minNumberSize, maxNumberSize);
  const unbalancedNumber = [];
  for (let i = 0; i < length; i += 1) {
    unbalancedNumber.push(getRandomNumber(0, 9));
  }

  const question = `${unbalancedNumber.join('')}`;
  const expectedAnswer = calcBalance(unbalancedNumber);

  return [question, expectedAnswer.join('')];
};

export default() => {
  runGame(description, runBalance);
};
