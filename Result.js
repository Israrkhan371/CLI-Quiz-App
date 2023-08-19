import chalk from "chalk";
let pointsEarned = 0;
async function result(a) {
    if (a == true) {
        console.log(chalk.green.bold("\n Your answer is correct \n"));
        pointsEarned = pointsEarned + 10;
    }
    else {
        console.log(chalk.red.bold("\n Incorrect answer \n"));
    }
    return pointsEarned;
}
export default result;
