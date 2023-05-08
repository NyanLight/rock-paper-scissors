let items = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return items[Math.floor(Math.random()*items.length)];
}