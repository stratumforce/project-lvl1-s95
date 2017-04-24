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

const isEvenNumber = (number) => {
  if (number % 2 === 0) return true;
  return false;
};

const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * ((max - min) + 1)) + min;
  return number;
};

export const game = (acc) => {
  // Передаваемый параметр acc - опциональный. Используется далее в качестве аккумулятора

  let correctAnswers = acc;
  if (correctAnswers === undefined) correctAnswers = 0;
  if (correctAnswers === 3) {
    return true;
  }

  // Определяем границы случайного числа и создаем его
  const min = 0;
  const max = 100;
  const randomNumber = getRandomNumber(min, max);
  // Определяем принимаемые ответы: 'no' === 0 === false, 'yes' === 1 === true
  const acceptableAnswers = ['no', 'yes'];

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const userChoice = acceptableAnswers.indexOf(answer.toLowerCase());
  if (userChoice >= 0) {
    const isEven = isEvenNumber(randomNumber);
    // Используем особенности языка: +true === 1, +false === 0
    if (userChoice === +isEven) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log('Wrong answer! Try again');
    }
  } else {
    // Любой некорректный ввод считается ошибкой (например, n) и равносилен неправильному ответу.
    console.log(`Wrong answer! Acceptable answers are: "${acceptableAnswers.join('", "')}"`);
  }

  return game(correctAnswers);
};
