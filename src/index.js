import readlineSync from 'readline-sync';

export default(description, gameRounds, gameFunc) => {
  console.log('Welcome to the Brain Games!');
  if (description !== undefined) console.log(`${description}`);
  const username = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${username}!\n`);

  if (gameFunc === undefined) return;

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, expectedAnswer] = gameFunc();
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
