import readlineSync from 'readline-sync';
import sayHello from '../index.js';

const findNod = (num1, num2) => {
  let number1 = num1;
  let number2 = num2;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return number1 + number2;
};

const playRound = (name) => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);

  console.log(`Question: ${number1} ${number2}`);

  const answerPlayer = readlineSync.question('Your answer: ');

  const answerCorrect = findNod(number1, number2);
  const isCorrectAnswer = answerPlayer.toString() === answerCorrect.toString();

  if (isCorrectAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.Let's try again, ${name}!`,
  );
  return false;
};

const getMission = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
