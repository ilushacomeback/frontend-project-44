import readlineSync from 'readline-sync';

const getGameOver = (name, playRound) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound(name);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const getMission = (mission) => {
  console.log(`${mission}`);
};

const sayHello = (playRound, mission) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  getMission(mission);
  getGameOver(name, playRound);
};

const isCorrectAnswer = (answerPlayer, answerCorrect, name) => {
  if (answerCorrect === answerPlayer) {
    console.log('Correct!');
    return true;
  }
  console.log(
    `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.\nLet's try again, ${name}!`,
  );
  return false;
};

const getQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answerPlayer = readlineSync.question('Your answer: ');
  return answerPlayer;
};

export { sayHello, isCorrectAnswer, getQuestion };
