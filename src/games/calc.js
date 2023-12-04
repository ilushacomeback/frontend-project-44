import { sayHello, isCorrectAnswer, getQuestion } from '../index.js';

const getResult = (numberOne, randomOperation, numberTwo) => {
  let result = 0;
  switch (randomOperation) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    case '*':
      result = numberOne * numberTwo;
      break;
    default:
      break;
  }
  return result;
};

const playRound = (name) => {
  const operations = ['+', '-', '*'];
  const numberOne = Math.floor(Math.random() * 10);
  const numberTwo = Math.floor(Math.random() * 10);
  const indexRandom = Math.floor(Math.random() * 3);
  const randomOperation = operations[indexRandom];

  const question = `${numberOne} ${randomOperation} ${numberTwo}`;
  const answerPlayer = getQuestion(question);
  const answerCorrect = getResult(numberOne, randomOperation, numberTwo).toString();

  const isCorrect = isCorrectAnswer(answerPlayer, answerCorrect, name);
  return isCorrect;
};

const play = () => {
  const mission = 'What is the result of the expression?';
  sayHello(playRound, mission);
};

export default play;
