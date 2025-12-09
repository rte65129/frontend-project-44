#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'
import { generateNum, isPrime } from '../src/games/helpers.js'

const name = greetUser()
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

for (let i = 0; i < 3; i += 1) {
  const number = generateNum()
  console.log(`Question: ${number}`)
  const userAnswer = readlineSync.question('Your answer: ')
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  if (userAnswer === correctAnswer) {
    console.log('Correct!')
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit()
  }
}

console.log(`Congratulations, ${name}!`)