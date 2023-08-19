import chalk from "chalk";
import showBanner from "node-banner";
import inquirer from "inquirer";
import PromptSync from "prompt-sync";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

export async function q5() {
  const ans5 = await inquirer.prompt([
    {
      name: "question5",
      type: "list",
      message: "Q5: Who was first prime minister of Pakistan?",
      choices: [
        "Liaquat Ali Khan",
        "Allama Iqbal",
        "Quaid-e-Azam Muhammad Ali Jinnah",
        "Sir Syed Ahmed Khan",
      ],
    },
  ]);
  return (await ans5.question5) === "Liaquat Ali Khan";
}
