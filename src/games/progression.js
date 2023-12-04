import { sayHello, isCorrectAnswer, getQuestion } from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

const playRound = (name) => {
  const progressionNumbers = [];
  const randomQuantity = getRandomNumber(5, 11);
  let randomNumber = Math.floor(Math.random() * 20);
  const randomProgression = getRandomNumber(1, 15);

  for (let i = 0; i < randomQuantity; i += 1) {
    progressionNumbers.push(randomNumber);
    randomNumber += randomProgression;
  }

  const randomIndex = getRandomNumber(0, progressionNumbers.length);
  const hiddenNumber = progressionNumbers[randomIndex];
  const correctAnswer = hiddenNumber.toString();
  progressionNumbers[randomIndex] = '..';

  const question = progressionNumbers.join(' ');
  const answerPlayer = getQuestion(question);
  const isCorrect = isCorrectAnswer(answerPlayer, correctAnswer, name);
  return isCorrect;
};

const play = () => {
  const mission = 'What number is missing in the progression?';
  sayHello(playRound, mission);
};

export default play;
