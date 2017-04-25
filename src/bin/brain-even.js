#!/usr/bin/env node
import { welcomeMessage, getUsername, game } from '..';

welcomeMessage('brain-even');
const username = getUsername();

if (game(username)) console.log(`Congratulations, ${username}!`);
