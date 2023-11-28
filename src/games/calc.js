import readlineSync from "readline-sync";
import sayHello from "../index.js";

const getResult = (numberOne, randomOperation, numberTwo) => {
  switch (randomOperation) {
    case "+":
      return numberOne + numberTwo;
    case "-":
      return numberOne - numberTwo;
    case "*":
      return numberOne * numberTwo;
    default:
  }
};

const playRound = (name) => {
  const operations = ["+", "-", "*"];
  const numberOne = Math.floor(Math.random() * 10);
  const numberTwo = Math.floor(Math.random() * 10);
  const indexRandom = Math.floor(Math.random() * 3);
  const randomOperation = operations[indexRandom];
  const question = `${numberOne} ${randomOperation} ${numberTwo}`;

  console.log(`Question: ${question}`);

  const answerPlayer = readlineSync.question("Your answer: ");
  const answerCorrect = getResult(numberOne, randomOperation, numberTwo);
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
  console.log("What is the result of the expression?");
};

const play = () => {
  sayHello(playRound, getMission);
};

export default play;
