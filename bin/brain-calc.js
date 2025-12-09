#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';
import { generateNum, calcNums, generationMathOperator } from '../src/games/helpers.js';

const name = greetUser();
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const num1 = generateNum();
  const num2 = generateNum();
  const operator = generationMathOperator();

  console.log(`Question: ${num1} ${operator} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = calcNums(num1, num2, operator);

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    process.exit();
  }
}

console.log(`Congratulations, ${name}!`);