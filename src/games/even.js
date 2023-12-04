import { sayHello, isCorrectAnswer, getQuestion } from '../index.js';

const playRound = (name) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answerPlayer = getQuestion(randomNumber);
  const answerCorrect = randomNumber % 2 === 0 ? 'yes' : 'no';
  const isCorrect = isCorrectAnswer(answerPlayer, answerCorrect, name);
  return isCorrect;
};

const play = () => {
  const mission = 'Answer "yes" if the number is even, otherwise answer "no". ';
  sayHello(playRound, mission);
};

export default play;
