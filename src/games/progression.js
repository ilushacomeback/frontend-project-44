import readlineSync from 'readline-sync';
import sayHello from '../index.js';

const getRandomNumber = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

const playRound = (name) => {
  const progressionNumbers = [];
  const randomQuantity = getRandomNumber(5, 11);
  let randomNumber = Math.floor(Math.random() * 20);
  const randomProgression = Math.floor(Math.random() * 15);

  for (let i = 0; i < randomQuantity; i += 1) {
    progressionNumbers.push(randomNumber);
    randomNumber += randomProgression;
  }

  const randomIndex = getRandomNumber(0, progressionNumbers.length);
  const hiddenNumber = progressionNumbers[randomIndex];
  const answerCorrect = hiddenNumber;
  progressionNumbers[randomIndex] = '..';

  const question = progressionNumbers.join(' ');
  console.log(`Question: ${question}`);

  const answerPlayer = readlineSync.question('Your answer: ');
  const isCorrectAnswer = answerCorrect.toString() === answerPlayer.toString();

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
  console.log('What number is missing in the progression?');
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
