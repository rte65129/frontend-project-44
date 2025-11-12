import readlineSync from 'readline-sync';
import { generateNum, generateProgression } from '../src/helpers/helpers.js';

for (let i = 0; i < 3; i += 1){
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const start = generateNum() % 50 + 1;
  const step = generateNum() % 10 + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);

  const progression = generateProgression(progressionLength, start, step);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  
  const question = progression.join(' ');
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again`);
    process.exit();
  }
}
console.log('Congratulations');