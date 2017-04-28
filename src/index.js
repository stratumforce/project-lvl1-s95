import readlineSync from 'readline-sync';

const gameRounds = 3;

export default(description, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}`);
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, expectedAnswer] = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== expectedAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\n` +
        `Let's try again, ${username}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${username}!`);
};
