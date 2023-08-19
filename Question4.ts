import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import PromptSync from "prompt-sync";
import { type } from "os";

export async function q4() {
  const ans4 = await inquirer.prompt([
    {
      name: "question4",
      type: "list",
      message: "Q4: When Pakistan came into being?",
      choices: [
        "15 August 1947",
        "14 August 1947",
        "23 March 1947",
        "14 August 1948",
      ],
    },
  ]);
  return ans4.question4 === "14 August 1947";
}
