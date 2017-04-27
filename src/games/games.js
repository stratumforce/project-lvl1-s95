import printWelcomeMessage, { getUsername, printGreeting } from '../functions';

export default() => {
  printWelcomeMessage();
  const username = getUsername();
  printGreeting(username);
};
