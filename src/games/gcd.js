import readlineSync from "readline-sync";
import sayHello from "../index.js";

const findNod = (num1, num2) => {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }
  return num1 + num2;
};

const playRound = (name) => {
  const number1 = Math.ceil(Math.random() * 100);
  const number2 = Math.ceil(Math.random() * 100);

  console.log(`Question: ${number1} ${number2}`);

  const answerPlayer = readlineSync.question("Your answer: ");

  const answerCorrect = findNod(number1, number2);
  const isCorrectAnswer = answerPlayer.toString() === answerCorrect.toString();

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
  console.log("Find the greatest common divisor of given numbers.");
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
