#! /usr/bin/env node
//Let's Create A Number_Guessing_Game
import inquirer from "inquirer";
const Guess_Random_numb = Math.floor(Math.random() * 20 + 1);
const Number_Guessing_Game = await inquirer.prompt([
    {
        name: "guess_numb",
        type: "number",
        message: "Please guessed the number between 1-20 ?",
    },
]);
if (Number_Guessing_Game.guess_numb == Guess_Random_numb) {
    console.log("Congrats your guessed is correct");
}
else {
    console.log("Opzzz you guessed wrong!");
}
