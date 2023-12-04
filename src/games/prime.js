import { sayHello, isCorrectAnswer, getQuestion } from '../index.js';

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

const playRound = (name) => {
  const randomNumber = Math.floor(Math.random() * 100);
  const answerPlayer = getQuestion(randomNumber);
  const correctAnswer = isPrime(randomNumber);
  const isCorrect = isCorrectAnswer(answerPlayer, correctAnswer, name);
  return isCorrect;
};

const play = () => {
  const mission = 'Answer "yes" if given number is prime. Otherwise answer "no". ';
  sayHello(playRound, mission);
};

export default play;
