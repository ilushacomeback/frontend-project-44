#!/usr/bin/env node
import readlineSync from "readline-sync";

const sayHello = () => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    game(name)
  };

const playRound = (name) => {
  const number = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no". ');
  console.log(`Question: ${number}`);
  const answerPlayer = readlineSync.question("Your answer: ");
  const currentAnswer = number % 2 === 0 ? "yes" : "no";
  if (currentAnswer === answerPlayer) {
    console.log("Correct!");
    return true;
  } else {
    console.log(
      `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`
    );
    return false;
  }
};

const game = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const isCorrect = playRound(name);
    if (!isCorrect) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

sayHello();
