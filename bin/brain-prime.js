import readlineSync from 'readline-sync';
import { generateNum, isPrime } from '../src/helpers/helpers.js';

console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)

for (let i = 0; i < 3; i += 1) {
    const number = generateNum();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again`);
    }
  }
console.log(`Congratulations!`);