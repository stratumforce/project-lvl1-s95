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

export const game = (username, acc) => {
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

  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isEven = isEvenNumber(randomNumber);
  const expectedAnswer = isEven ? 'yes' : 'no';

  if (userAnswer !== expectedAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\n` +
      `Let's try again, ${username}!`);
  } else {
    console.log('Correct!');
    return game(username, correctAnswers + 1);
  }

  return false;
};
