import inquirer from "inquirer"

let randomnymber=Math.floor(Math.random()*10 + 1)

let answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type:"number",
        message:"Please guess a number"

    }

])

if (answer.userGuessnumber===randomnumber)
{console.log("congrats! you guessed a right number.")}

else{console.log"You guessed wrong number"}
