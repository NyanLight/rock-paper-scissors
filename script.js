const items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)];
};

function getPlayerChoice() {
    return prompt('Choose your fighter!').toLowerCase(); 
}
let playerScore; 
let computerScore;

function oneRound (playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) {
    if (computerChoice === playerChoice) {
        console.log("It's tie round");
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        console.log("Paper beats a rock, you lose the round!");
        ++computerScore;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        console.log("Paper beats a rock, you win the round!");
        ++playerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        console.log('Scissors beat a paper, you win!');
        ++playerScore;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        console.log('Rock beats scissors, you lose!');
        ++computerScore;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        console.log('Scissors beat the paper, you lose');
        ++computerScore;
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        console.log('Rock beats scissors, you win!');
        ++playerScore;  
    }
};

function oneGame () {
    playerScore = 0; 
    computerScore = 0; 
    for (let i = 0; i < 5; i++) {
        oneRound(playerChoice = getPlayerChoice(), computerChoice = getComputerChoice());
        console.log(`Score: ${playerScore}:${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log('You won! Congratulations!');
    } else {
        console.log('You lose!');
    }}
    