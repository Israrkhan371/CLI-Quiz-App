import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
export async function q2() {
  const ans2 = await inquirer.prompt([
    {
      name: "question2",
      type: "list",
      message: "Q2 :Who started Aligarh Movement?",
      choices: [
        "Liaquat Ali Khan",
        "Allama Iqbal",
        "Quaid-e-Azam Muhammad Ali Jinnah",
        "Sir Syed Ahmed Khan",
      ],
    },
  ]);
  return ans2.question2 === "Sir Syed Ahmed Khan";
}
