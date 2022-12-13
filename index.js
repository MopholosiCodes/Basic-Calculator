let win = 0
    , loss = 0
    , draw = 0;

const ROCK = "rock"
    , PAPER = "paper"
    , SCISSORS = "scissors";

const computerPlay = () => {
    let randomSelection = Math.floor(Math.random() * 3) + 1;

    if (randomSelection === 1) return ROCK;
    else if (randomSelection === 2) return PAPER;
    else if (randomSelection === 3) return SCISSORS;
    else return;
}

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        draw++;
        return `Its a draw! ${playerSelection} matches ${computerSelection}`;
    }
    // variations for when the player loses
    else if (playerSelection === ROCK && computerSelection === PAPER || playerSelection === PAPER && computerSelection === SCISSORS || playerSelection === SCISSORS && computerSelection === ROCK) {
        loss++;
        return `You lost! ${playerSelection} does not beat ${computerSelection}`;
    }
    // variations for when the player wins
    else if (playerSelection === ROCK && computerSelection === SCISSORS || playerSelection === PAPER && computerSelection === ROCK || playerSelection === SCISSORS && computerSelection === PAPER) {
        win++;
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else return;
}

const handleInput = () => {
    for (let round = 1; round < 6; round++) {
        let playerSelection = prompt("Enter your option: \n 1. ROCK \n 2. PAPER \n 3. SCISSORS");

        if (playerSelection === "1" || playerSelection.trim().toLowerCase() === "rock") playerSelection = ROCK;
        else if (playerSelection === "2" || playerSelection.trim().toLowerCase() === "paper") playerSelection = PAPER;
        else if (playerSelection === "3" || playerSelection.trim().toLowerCase() === "scissors") playerSelection = SCISSORS;
        else if (playerSelection === " ") {
            round--;
            alert("Empty input!");
        }
        else {
            round--;
            alert("invalid input!");
        }

        console.log(playRound(playerSelection, computerPlay()));
    }
}

const game = () => {
    console.log("\n \t ------ ROCK, PAPER, SCISSORS ------ \n");
    handleInput()
    alert(`Overall score: \n \t Wins: ${win} \n \t Losses: ${loss} \n \t Draw: ${draw}`)
}

game();
