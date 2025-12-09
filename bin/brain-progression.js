#!/usr/bin/env node
import readlineSync from 'readline-sync'
import greetUser from '../src/cli.js'
import { generateNum, generateProgression } from '../src/games/helpers.js'

const name = greetUser()
console.log('What number is missing in the progression?')

for (let i = 0; i < 3; i += 1) {
  const length = Math.floor(Math.random() * 6) + 5 // 5-10 numbers
  const start = generateNum()
  const step = Math.floor(Math.random() * 10) + 1
  const progression = generateProgression(length, start, step)
  const hiddenIndex = Math.floor(Math.random() * length)
  const correctAnswer = progression[hiddenIndex]
  progression[hiddenIndex] = '..'

  console.log(`Question: ${progression.join(' ')}`)
  const userAnswer = readlineSync.question('Your answer: ')

  if (Number(userAnswer) === correctAnswer) {
    console.log('Correct!')
  }
 else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    console.log(`Let's try again, ${name}!`)
    process.exit()
  }
}

console.log(`Congratulations, ${name}!`)
