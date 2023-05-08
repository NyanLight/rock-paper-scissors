let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)];
}

function oneRound(playerSelection, computerSelection) {
    playerSelection = prompt("Choose your weapon!").toLowerCase();
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        return "Oh, that's draw!"
    } else if (playerSelection === "scissors"  && computerSelection === "paper") {
        return "You win! Scissors beat paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper";
    } 
}

function isItVictory() {
check = oneRound().slice(0, 5);
if (check == "You w") {
    return 1;
} else {
    return 0;
}
}

function game(){
    score = isItVictory() + isItVictory() + isItVictory () + isItVictory() + isItVictory ();
    if (score < 3) {
        console.log("You lose");
    } else {
        console.log("You win!");
    }
}

