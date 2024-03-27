import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "UserGuessedNumber",
    type: "number",
    message: "Please guess a number",
  },
]);
if (answer.UserGuessedNumber === randomNumber) {
  console.log("you guessed it correctly!");
} else if (answer.UserGuessedNumber !== randomNumber) {
  console.log("you lost");
}

