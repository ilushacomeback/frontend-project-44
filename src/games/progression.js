import readlineSync from "readline-sync";
import sayHello from "../index.js";

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};

const playRound = (name) => {
  const progressionNumbers = [];
  let randomQuantity = getRandomNumber(5, 11);
  let randomNumber = Math.round(Math.random() * 20);
  let randomProgression = Math.round(Math.random() * 15);

  for (let i = 0; i < randomQuantity; i += 1) {
    progressionNumbers.push(randomNumber);
    randomNumber = randomNumber + randomProgression;
  }

  let randomIndex = getRandomNumber(0, progressionNumbers.length);
  let hiddenNumber = progressionNumbers[randomIndex];
  const answerCorrect = hiddenNumber;
  progressionNumbers[randomIndex] = "..";

  const question = progressionNumbers.join(" ");
  console.log(`Question: ${question}`);

  const answerPlayer = readlineSync.question("Your answer: ");
  const isCorrectAnswer = answerCorrect.toString() === answerPlayer.toString();

  if (isCorrectAnswer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'${answerPlayer}' is wrong answer ;(. Correct answer was '${answerCorrect}'.Let's try again, ${name}!`
    );
    return false;
  }
};

const getMission = () => {
  console.log("What number is missing in the progression?");
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
