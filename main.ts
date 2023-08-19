import result from "./Result.js";
import { q1 } from "./Question1.js";
import { q2 } from "./Question2.js";
import { q3 } from "./Question3.js";
import { q4 } from "./Question4.js";
import { q5 } from "./Question5.js";
import chalk from "chalk";
import showBanner from "node-banner";

// (async () => {
//   await showBanner("QUIZ");
// })();

console.log(chalk.yellowBright.bold("\n QUIZ \n"));

// console.log(chalk.overline.bold("\n This quiz consists of 5 questions. \n"));

console.log(
  chalk.bgGray.bold(
    "\n Note: This quiz consists of 5 questions. \n       Each questions carries 10 marks. \n"
  )
);

let answer1 = await q1();
// console.log(answer1);
let score = await result(answer1);
// console.log(score);

let answer2 = await q2();
score = await result(answer2);

let answer3 = await q3();
score = await result(answer3);

let answer4 = await q4();
score = await result(answer4);

let answer5 = await q5();
score = await result(answer5);

console.log(chalk.yellowBright.bold.italic("Your score is", score));
