


let yourScore = 0;
let computerScore = 0;

console.log(game());

// Randomly generates the computer choice
function getComputerChoice() {
    
    let randomInt = Math.floor(Math.random()* 3);

    if(randomInt == 0) {return "ROCK";} 
    else if(randomInt == 1) {return "PAPER";} 
    else{return "SCISSORS";}
}

// Plays one round
function gambleOneRound(computerSelection, playerSelection) {
    if(computerSelection == playerSelection) {
        return "That's a draw!"
    } else if(computerSelection == "PAPER" && playerSelection == "SCISSORS" ||
              computerSelection == "ROCK" && playerSelection == "PAPER" ||
              computerSelection == "SCISSORS" && playerSelection == "ROCK") {
        return "Congratulations, you won! " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase() + " beats " + computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase() + "."
    } else if(computerSelection == "PAPER" && playerSelection == "ROCK" ||
              computerSelection == "ROCK" && playerSelection == "SCISSORS" ||
              computerSelection == "SCISSORS" && playerSelection == "PAPER") {
        return "Hmm... looks like you lost this round! " + computerSelection.charAt(0) + computerSelection.slice(1).toLowerCase() + " beats " + playerSelection.charAt(0) + playerSelection.slice(1).toLowerCase() + "."
    } else 
        return "Not a valid answer. In order to participate at this game, please choose from 'Rock', 'Paper' or 'Scissors'."
}

// Plays 5 rounds and counts scores
function game() {

    for (let i = 1; i <= 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Make a choice").toUpperCase();
        const result = gambleOneRound(computerSelection,playerSelection);

        if(result.includes("won")) {
            yourScore += 1;
        } else if (result.includes("lost")) {
            computerScore += 1;
        } else if (result.includes("Not a valid")) {
            i -= 1;
        }

        console.log("--------------------------")
        console.log("Round "+ i + "/" + 5)
        console.log("The computer choosed: " + computerSelection);
        console.log("You choosed: " + playerSelection);
        console.log(gambleOneRound(computerSelection, playerSelection));
        console.log("Your score is " + yourScore + ".");
        console.log("The computers score is " + computerScore + ".");
    }

    if(yourScore > computerScore){
        console.log(`You won the game. The game ended with ${yourScore} / ${computerScore}`)
    } else if (yourScore < computerScore) {
        console.log(`You lost the game. The game ended with ${yourScore} / ${computerScore}`)
    } else {
        console.log(`That's a draw. The game ended with ${yourScore} / ${computerScore}`)
    }
    return "--------------------------\nGame finished."

}