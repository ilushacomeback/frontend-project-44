import { sayHello, isCorrectAnswer, getQuestion } from '../index.js';

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
  const question = `${number1} ${number2}`;
  const answerPlayer = getQuestion(question);
  const answerCorrect = findNod(number1, number2).toString();
  const isCorrect = isCorrectAnswer(answerPlayer, answerCorrect, name);
  return isCorrect;
};

const play = () => {
  const mission = 'Find the greatest common divisor of given numbers.';
  sayHello(playRound, mission);
};

export default play;
