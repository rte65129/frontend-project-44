#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { name } from './brain-games.js';
import { generateNum, isEven } from '../src/helpers/helpers.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = generateNum();
  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = isEven(number);

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let\'s try again, ${name}`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}`);