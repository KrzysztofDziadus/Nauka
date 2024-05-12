function getComputerChoice() {
    let array = ["kamień", "papier", "nożyce"];
    let random = Math.floor(Math.random() * 3);
    return array[random]
}

// let buttonRock = document.querySelector("#rock");

let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Kamień, papier, nożyce?",);
}



let playRound = function (humanChoice, computerChoice) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
     if (humanChoice === computerChoice) {
        alert(`Tie \n ${humanChoice} = ${computerChoice} \n Your score's: ${humanScore} \n Oponent score's ${computerScore}`)
    } else if (humanChoice === "kamień" && computerChoice === "nożyce" ||
        humanChoice === "papier" && computerChoice === "kamień" ||
        humanChoice === "nożyce" && computerChoice === "papier") {
        humanScore++;
        alert(`Player win\n ${humanChoice} bit a ${computerChoice} \n Your score's: ${humanScore} \n Oponent score's ${computerScore}`)
    } else {
        computerScore++;
        alert(`Computer win\n ${computerChoice} bit a ${humanChoice} \n Your score's: ${humanScore} \n Oponent score's ${computerScore}`)
    }

}

let i = 1;
function playGame(){
    while (!(humanScore === 5) || !(computerScore === 5)) {
        alert(`Round ${i++}`)
        playRound();
        if (humanScore === 5 || computerScore === 5) {
            // Determine the winner and update the outcome text
            if (humanScore > computerScore) {
                alert(`you won game`);
                break;
            } else {
                alert(`Oponent won game`)
                break;
            }
        }
    }
}

playGame()