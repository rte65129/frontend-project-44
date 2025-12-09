import readlineSync from 'readline-sync';
import { name } from './brain-games.js';
import { gcd, generateNum } from '../src/helpers/helpers.js';

console.log(`Find the greatest common divisor of given numbers.`);

for (let i = 0; i < 3; i += 1) {
  const num1 = generateNum();
  const num2 = generateNum();

  console.log(`Question: ${num1} ${num2}`);
  let correctAnswer = gcd(num1, num2);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === String(correctAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let\'s try again, ${name}`);
    process.exit();
  }
}

console.log('Congratulations!');