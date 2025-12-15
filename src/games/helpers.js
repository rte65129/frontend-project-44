export const generateNum = () => {
  const min = 1
  const max = 100
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const isEven = (number) => {
  return number % 2 === 0 ? 'yes' : 'no'
}

export const generationMathOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

export const calcNums = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '*':
      return num1 * num2
    default:
      return 0
  }
}

export const gcd = (a, b) => {
  while (b !== 0) {
    const temp = b
    b = a % b
    a = temp
  }
  return a
}

export const isPrime = (num) => {
  if (num < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const generateProgression = (length, start, step) => {
  const progression = []
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step)
  }
  return progression
}