export function generateNum(){
  return Math.floor(Math.random() * 101)
}

export const generationMathOperator = () => {
  const operators = ['+', '-', '*', '/']; 
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
}

export function isEven(num){
  return num % 2 === 0 ? `yes` : `no`;
}


export function isEvenGame(userInput,num){
  const answer = isEven(num)
  if(userInput === answer){
    console.log(`правильно`)
  }
  else{
    console.log(`не правильно`)
  }
}

export function calcNums(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return Math.floor(num1 / num2);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}


export function calcGame(userInput, correctAnswer) {
  const userAnswer = parseFloat(userInput);
  
  if (userAnswer === correctAnswer) {
    console.log('Correct');
    return true;
  } else {
    console.log(`'${userInput}' is wrong answer. Correct answer was '${correctAnswer}'.`);
    return false;
  }
}

export function gcd(num1, num2){
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)

  while (num2 !== 0) {
    const temp = num2
    num2 = num1 % num2
    num1 = temp
  }
  return num1
}

export function generateProgression(length, start, step){
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
}

export function isPrime(num) {
  if (num <= 1) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false; 

  const maxDivisor = Math.sqrt(num); 
  for (let i = 3; i <= maxDivisor; i += 2) {
    if (num % i === 0) return false;
  }
  
  return true;
}