#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright `---------------------------------Currency Converter-----------------------------`);
let converter = {
    PKR: 1, //base
    USD: 0.0036,
    AED: 0.013, // saudi rupees
    INR: 0.030, //indian rupees
    EURO: 0.0034,
    EGYPTPOUND: 0.17, //Egyptian Pound
    CYUAN: 0.026 //Chinese Yuan
};
let answer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency : ",
        type: "list",
        choices: ["PKR", "USD", "AED", "INR", "EURO", "EGYPTPOUND", "CYUAN"]
    },
    {
        name: "to",
        message: "Enter to currency : ",
        type: "list",
        choices: ["PKR", "USD", "AED", "INR", "EURO", "EGYPTPOUND", "CYUAN"]
    },
    {
        name: "amount",
        message: "Enter amount which you want to convert : ",
        type: "number"
    }
]);
let fromAmount = converter[answer.from];
let toAmount = converter[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bold.blueBright(`You convert value from ${answer.from} to ${answer.to} is ${convertedAmount}`));
