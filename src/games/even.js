import readlineSync from 'readline-sync';
import sayHello from '../index.js';

const playRound = (name) => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answerPlayer = readlineSync.question('Your answer: ');
  const currentAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (currentAnswer === answerPlayer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${answerPlayer}' is wrong answer ;(. Correct answer was '${currentAnswer}'.\nLet's try again, ${name}!`,
  );
  return false;
};

const getMission = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
