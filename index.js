import inquirer from "inquirer";
import chalk from "chalk";
let exit = false;
while (!exit) {
    const answer = await inquirer.prompt([
        { message: chalk.yellow("Enter first number"), type: "number", name: "firstnumber" },
        { message: chalk.yellow("Enter second number"), type: "number", name: "secondnumber" },
        { message: chalk.red("Select operator"), type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division"] }
    ]);
    if (answer.operator === "addition") {
        console.log(answer.firstnumber + answer.secondnumber);
    }
    else if (answer.operator === "subtraction") {
        console.log(answer.firstnumber - answer.secondnumber);
    }
    else if (answer.operator === "multiplication") {
        console.log(answer.firstnumber * answer.secondnumber);
    }
    else if (answer.operator === "division") {
        if (answer.secondnumber !== 0) {
            console.log(answer.firstnumber / answer.secondnumber);
        }
        else {
            console.log("Error: Division by zero is not allowed");
        }
    }
    else {
        console.log("Please select a valid operator");
    }
    const continueAnswer = await inquirer.prompt([
        {
            message: "Do you want to continue? (Yes/No)",
            type: "list",
            name: "continue",
            choices: ["Yes", "No"]
        }
    ]);
    if (continueAnswer.continue === "No") {
        console.log("Goodbye!");
        exit = true;
    }
}
