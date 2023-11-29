import readlineSync from 'readline-sync';
import sayHello from '../index.js';

const isPrime = (randomNumber) => {
  if (randomNumber === 1) {
    return 'no';
  }

  for (let i = 2; i < randomNumber; i += 1) {
    if (randomNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

console.log(isPrime(1));

const playRound = (name) => {
  const randomNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomNumber}`);
  const answerCorrect = isPrime(randomNumber);
  const answerPlayer = readlineSync.question('Your answer: ');

  if (answerCorrect === answerPlayer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\nLet's try again, ${name}!`,
  );
  return false;
};

const getMission = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no". ');
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
