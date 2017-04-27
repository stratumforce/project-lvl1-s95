import readlineSync from 'readline-sync';
import { printWelcomeMessage, getUsername, printGreeting } from './functions';

export default(description, gameRounds, runGame) => {
  printWelcomeMessage();
  console.log(`${description}`);
  const username = getUsername();
  printGreeting(username);

  for (let i = 0; i < gameRounds; i += 1) {
    const [question, expectedAnswer] = runGame();
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
