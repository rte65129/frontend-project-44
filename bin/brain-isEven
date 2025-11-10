import readlineSync from 'readline-sync';
import { isEven } from '../src/helpers/helpers.js';
import { generateNum } from '../src/helpers/helpers.js';
import { isEvenGame } from '../src/helpers/helpers.js';



console.log(`Answer "yes" if the number is even, otherwise answer "no".`);


const evenGameNum1 = generateNum();
const evenGameNum2 = generateNum();
const evenGameNum3 = generateNum();

console.log(`Question: ${evenGameNum1}`)
let userInput1 = readlineSync.question('Your answer: ')
isEvenGame(userInput1, evenGameNum1)

console.log(`Question: ${evenGameNum2}`)
let userInput2 = readlineSync.question('Your answer: ')
isEvenGame(userInput2, evenGameNum2)

console.log(`Question: ${evenGameNum3}`)
let userInput3 = readlineSync.question('Your answer: ')
isEvenGame(userInput3, evenGameNum3)