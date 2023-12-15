let option1 = "rock";
let option2 = "paper";
let option3 = "scissors";

function getComputerChoice() {
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
}

// console.log(getComputerChoice());

function playRound(p1, p2) {
  p1 = p1.toLowerCase();
  p2 = p2.toLowerCase();

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

*/
