import inquirer from "inquirer";
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
