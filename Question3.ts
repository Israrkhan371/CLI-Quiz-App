import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import PromptSync from "prompt-sync";
import { type } from "os";

export async function q3() {
  const ans3 = await inquirer.prompt([
    {
      name: "question3",
      type: "list",
      message: "Q3: Who is writer of national anthem of Pakistan?",
      choices: [
        "Hafeez Jalandhari",
        "Liaquat Ali Khan",
        "Fatima Jinnah",
        "Sir Syed Ahmed Khan",
      ],
    },
  ]);
  return ans3.question3 === "Hafeez Jalandhari";
}
