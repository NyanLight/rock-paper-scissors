const items = ["rock", "paper", "scissors"]; // an array contains list of available turns in rock-paper-scissors game
function getComputerChoice() { // a function get a random item from the array above and return a value
    return items[Math.floor(Math.random()*items.length)]; 
};

function getPlayerChoice() { // create a function to get player's input and make it case insensetive using toLowerCase method
    return prompt('Choose your fighter!').toLowerCase(); 
}
let playerScore = 0;  //  create a variable to store player's score
let computerScore = 0; // create a variable to store player's score

function oneRound (playerChoice = getPlayerChoice(), computerChoice = getComputerChoice()) { //function to play one round of RPS game using conditional statement to check who wins
    if (computerChoice === playerChoice) {
        display.textContent = ("It's tie round");
        checkWinner();
    } else if (computerChoice === "paper" && playerChoice === "rock") {
        display.textContent = ("Paper beats a rock, you lose the round!");
        ++computerScore;
        checkWinner();
    } else if (computerChoice === "rock" && playerChoice === "paper") {
        display.textContent = ("Paper beats a rock, you win the round!");
        ++playerScore;
        checkWinner();
    } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
        display.textContent = ('Scissors beat a paper, you win!');
        ++playerScore;
        checkWinner();
    } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
        display.textContent = ('Rock beats scissors, you lose!');
        ++computerScore;
        checkWinner();
    } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
        display.textContent = ('Scissors beat the paper, you lose');
        ++computerScore;
        checkWinner();
    } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
        display.textContent = ('Rock beats scissors, you win!');
        ++playerScore;
        checkWinner();
    }
};

const rock = document.querySelector('#rockButton');
const paper = document.querySelector('#paperButton');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#display');
const score = document.querySelector('#score');



score.textContent = (`${playerScore} : ${computerScore}`);

rock.addEventListener('click', () => {
    oneRound("rock");
});
paper.addEventListener('click', () =>  {
    oneRound("paper")
});
scissors.addEventListener('click', () => {
    oneRound("scissors")
}); 

    function checkWinner() {
        if (playerScore < 5 && computerScore < 5) {
            score.textContent = (`${playerScore} : ${computerScore}`);
        } else if (playerScore = 5) {
            score.textContent = (`You reach 5 points, so you win!`)
        } else {
            score.textContent = (`Computer reach 5 points, so you lose`)
        }
    }


    


