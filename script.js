const items = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return items[Math.floor(Math.random() * items.length)];
}
let playerScore = 0;
let computerScore = 0;

function oneRound(playerChoice, computerChoice = getComputerChoice()) {
  if (computerChoice === playerChoice) {
    displayComputerChoice(computerChoice); 
    display.textContent = "It's tie round";
    checkWinner();
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Paper beats a rock, you lose the round!";
    ++computerScore;
    checkWinner();
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Paper beats a rock, you win the round!";
    ++playerScore;
    checkWinner();
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Scissors beat a paper, you win!";
    ++playerScore;
    checkWinner();
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Rock beats scissors, you lose!";
    ++computerScore;
    checkWinner();
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Scissors beat the paper, you lose";
    ++computerScore;
    checkWinner();
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    displayComputerChoice(computerChoice); 
    display.textContent = "Rock beats scissors, you win!";
    ++playerScore;
    checkWinner();
  }
}

const buttons = document.querySelector("#buttons");
const rock = document.querySelector("#rockButton");
const paper = document.querySelector("#paperButton");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const score = document.querySelector("#score");
const container = document.querySelector("#container");
const computerChoiceDisplay = document.querySelector('#computer_choice_display');

score.textContent = `${playerScore} : ${computerScore}`;

rock.addEventListener("click", () => {
  oneRound("rock");
});
paper.addEventListener("click", () => {
  oneRound("paper");
});
scissors.addEventListener("click", () => {
  oneRound("scissors");
});

function checkWinner() {
  if (playerScore < 5 && computerScore < 5) {
    score.textContent = `${playerScore} : ${computerScore}`;
  } else if ((playerScore = 5)) {
    score.textContent = `You reach 5 points, so you win!`;
    buttonsRemove();
    showRestart();
  } else {
    score.textContent = `Computer reach 5 points, so you lose`;
    showRestart();
    buttonsRemove();
  }
}

function displayComputerChoice(computerChoice) {
  computerChoiceDisplay.textContent = `Computer choice is ${computerChoice}`;
}

const restart = document.createElement("button");
restart.innerHTML = "<img src=pics/restart.png>";
restart.addEventListener("click", restartGame);

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  computerChoiceDisplay.textContent = "";
  score.textContent = `${playerScore} : ${computerScore}`;
  display.textContent = "";
  restart.remove();
  buttons.appendChild(rock);
  buttons.appendChild(paper);
  buttons.appendChild(scissors);
}

function showRestart() {
  container.insertBefore(restart, computerChoiceDisplay);
}

function buttonsRemove() {
  rock.remove();
  paper.remove(); 
  scissors.remove();
}
