import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";

let pointsEarned = 0;

async function result(a: boolean) {
  if (a == true) {
    console.log(chalk.green.bold("\n Your answer is correct \n"));
    pointsEarned = pointsEarned + 10;
  } else {
    console.log(chalk.red.bold("\n Incorrect answer \n"));
  }

  return pointsEarned;
}
export default result;
