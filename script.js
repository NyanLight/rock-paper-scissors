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

const rock = document.querySelector('#rockButton');
const paper = document.querySelector('#paperButton');
const scissors = document.querySelector('#scissors');


rock.addEventListener('click', () => {
    oneRound("rock");
});
paper.addEventListener('click', () =>  {
    oneRound("paper")
});
scissors.addEventListener('click', () => {
    oneRound("scissors")
}); 

    