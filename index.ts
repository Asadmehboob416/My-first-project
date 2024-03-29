#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "secondnumber" },
    {
        message: "Select One of the Operators to Perform Operations",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.Operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please Select Valid Operator");
}
