let option1 = "rock";
let option2 = "paper";
let option3 = "scissors";

<<<<<<< HEAD
function getComputerChoice() {
=======
const getComputerChoice = function () {
>>>>>>> rps-ui
  let randomInteger = Math.floor(Math.random() * 3);

  switch (randomInteger) {
    case 0:
      return option1;
      // randomInteger = option1;
      break;

    case 1:
      // randomInteger = option2;
      return option2;
      break;

    case 2:
      // randomInteger = option3;
      return option3;
  }

  return randomInteger;
<<<<<<< HEAD
}

// console.log(getComputerChoice());

function playRound(p1, p2) {
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();
=======
};

const playRound = function (p1, p2) {
  // p1 = p1.toLowerCase();
  // p2 = p2.toLowerCase();
>>>>>>> rps-ui

  if (p1 == "rock" && p2 == "scissors") {
    return "You won! Rock beats Scissors";
  } else if (p1 == "scissors" && p2 == "paper") {
    return "You won! Scissors beats Paper";
  } else if (p1 == "paper" && p2 == "rock") {
    return "You won! Paper beats Rock";
  } else if (p1 == p2) {
    return "It's a tie";
  } else {
    return "GAME OVER!";
  }
<<<<<<< HEAD
}

let player1 = prompt("Rock, Paper, Scissors?");

let player2 = getComputerChoice();

console.log(player2);
console.log(playRound(player1, player2));

/*

input:choice from both player
=============================

get players' choices=
player , computer
=====
set rules=
rock wins against scissors but looses against paper



scissors wins against paper but loses against rock



paper wins against rock but loses against scissors


=====
compare choice to one another=


announce winner=


=============================
output:show who wins or tie

=======
};

// const computerChoice = getComputerChoice();

// let player1 = prompt("Rock, Paper, Scissors?");

// let player2 = getComputerChoice();

// console.log(player2);
// console.log(playRound(player1, player2));

/*=================================
          DOM MANIPULATION
=================================*/

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "ROCK";
paperBtn.textContent = "PAPER";
scissorsBtn.textContent = "SCISSORS";

const container = document.querySelector(".container");

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

rockBtn.addEventListener("click", () => handlerToBtn("rock"));

paperBtn.addEventListener("click", () => handlerToBtn("paper"));

scissorsBtn.addEventListener("click", () => handlerToBtn("scissors"));

const handlerToBtn = function (choice) {
  const playerChoice = choice;
  const computerChoice = getComputerChoice();

  const player = document.querySelector("#player-choice");
  const computer = document.querySelector("#computer-choice");
  const result = document.querySelector("#result");

  player.textContent = `Player chose ${playerChoice}`;
  computer.textContent = `Computer chose ${computerChoice}`;

  const roundResult = playRound(playerChoice, computerChoice);

  const playerPoints = document.querySelector("#player-points");
  const computerPoints = document.querySelector("#computer-points");

  if (roundResult.includes("You won!")) {
    playerPointsCounter++;
  } else if (!roundResult.includes("It's a tie")) {
    computerPointsCounter++;
  }

  playerPoints.textContent = playerPointsCounter;
  computerPoints.textContent = computerPointsCounter;
  // console.log(roundResult);
  // result.textContent = playRound(playerChoice, computerChoice);

  checkGameStatus();
};

let playerPointsCounter = 0;
let computerPointsCounter = 0;

function checkGameStatus() {
  if (playerPointsCounter == 5) {
    alert("Congrats! You beat AI!");
  } else if (computerPointsCounter == 5) {
    alert("Oh no! You lost to AI. Big Sadge!");
  }
}

/*

goal: make a counter of the results from playRound function and alert a winner after five wins
input:player choice , computer choice , function that plays a round of rps
================================================================
#play a round of rps
-run function that plays the round between P and C
playRound(playerChoice , computerChoice )
================================================================
#create variable to store the points of P and C
-variable = player points
-variable = computer points

const playerPoints = 0;
const computerPoints = 0;

================================================================
#update points in the variable until 5 points is reached
-every time player wins; add one point to its counter
-every time computer wins; add one point to its counter

if player wins = update one point
if(player == you won){
  update playerPoints +1
} else {
  update computerPoints +1
}


if computer wins = update one point

================================================================
#alert the winner
alert; this or that reached 5 points and won

if(playerPoints == 5){
  alert('Congrats! You won!)
}else{
  alert('GAME OVER')
}
================================================================
output: alert a winner after five wins of rps


>>>>>>> rps-ui
*/
