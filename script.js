const items = ["rock", "paper", "scissors"]; // an array contains list of available turns in rock-paper-scissors game
function getComputerChoice() { // a function get a random item from the array above and return a value
    return items[Math.floor(Math.random()*items.length)]; 
};

function getPlayerChoice() { // create a function to get player's input and make it case insensetive using toLowerCase method
    return prompt('Choose your fighter!').toLowerCase(); 
}
let playerScore;  //  create a variable to store player's score
let computerScore; // create a variable to store player's score

function oneRound (playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) { //function to play one round of RPS game using conditional statement to check who wins
    if (computerChoice === playerChoice) {
        display.textContent = ("It's tie round");
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        display.textContent = ("Paper beats a rock, you lose the round!");
        ++computerScore;
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        display.textContent = ("Paper beats a rock, you win the round!");
        ++playerScore;
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        display.textContent = ('Scissors beat a paper, you win!');
        ++playerScore;
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        display.textContent = ('Rock beats scissors, you lose!');
        ++computerScore;
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        display.textContent = ('Scissors beat the paper, you lose');
        ++computerScore;
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        display.textContent = ('Rock beats scissors, you win!');
        ++playerScore;  
    }
};

const rock = document.querySelector('#rockButton');
const paper = document.querySelector('#paperButton');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#display');


rock.addEventListener('click', () => {
    oneRound("rock");
});
paper.addEventListener('click', () =>  {
    oneRound("paper")
});
scissors.addEventListener('click', () => {
    oneRound("scissors")
}); 

    