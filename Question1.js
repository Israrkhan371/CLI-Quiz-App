import inquirer from "inquirer";
export async function q1() {
    const ans1 = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            message: `Q1: Who is founder of "Pakistan"?`,
            choices: [
                "Liaquat Ali Khan",
                "Allama Iqbal",
                "Quaid-e-Azam Muhammad Ali Jinnah",
                "Sir Syed Ahmed Khan",
            ],
        },
    ]);
    return ans1.question1 === "Quaid-e-Azam Muhammad Ali Jinnah";
}
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
