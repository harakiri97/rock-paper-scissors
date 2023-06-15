


let myScore = 0;
let compScore = 0;
let gameOver = false;



const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => { 
    button.addEventListener('click', () => {
        const computerSelection = getComputerChoice();
        const playerSelection = button.innerText.toUpperCase();
        const result = gambleOneRound(computerSelection,playerSelection);

        game(result);
    });
});

// Randomly generates the computer choice
function getComputerChoice() {

    let randomInt = Math.floor(Math.random()* 3);
    return ["ROCK", "PAPER", "SCISSORS"][randomInt];
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


function game(result) {

    let resultsDiv = document.querySelector('.results');
    resultsDiv.innerHTML += result + "<br>";

    if(result.includes("won")) {
        myScore += 1;
    } else if (result.includes("lost")) {
        compScore += 1;
    }

    document.querySelector('.myScore').innerHTML = "Your Score: " + myScore;
    document.querySelector('.compScore').innerHTML = "Computer Score: " + compScore;

    if(myScore == 5) {
        resultsDiv.innerHTML += "You won the game with " + myScore + " to " + compScore + "!<br>";
        gameOver = true;
        endGame();
    } else if(compScore == 5) {
        resultsDiv.innerHTML += "You lost the game with " + myScore + " to " + compScore + "!<br>";
        gameOver = true;
        endGame();
    }
}


function endGame() {
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;

    const restartButton = document.querySelector(".restart");
    restartButton.addEventListener("click", () => {
        location.reload();
    })
}