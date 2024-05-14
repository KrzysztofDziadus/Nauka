let buttonRock = document.querySelector("#rock");
let buttonPaper = document.querySelector("#paper");
let buttonScissors = document.querySelector("#scissors");
let playerResult = document.querySelector(".result-player");
let computerResult = document.querySelector(".result-computer");
let startText = document.querySelector(".start-text");
let boxResult1 = document.querySelector(".results1");
let boxResult2 = document.querySelector(".results2");
let buttonRestart = document.querySelector("#restart");




function getComputerChoice() {
    let array = ["kamień", "papier", "nożyce"];
    let random = Math.floor(Math.random() * 3);
    return array[random]
}



let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Kamień, papier, nożyce?",);
}

function disableButton(){
    buttonScissors.disabled = true;
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonRock.classList.remove("switch")
    buttonPaper.classList.remove("switch")
    buttonScissors.classList.remove("switch")

}

function enableButton(){
    buttonScissors.disabled = false;
    buttonRock.disabled = false;
    buttonPaper.disabled = false;
    buttonRock.classList.add("switch")
    buttonPaper.classList.add("switch")
    buttonScissors.classList.add("switch")
}

function restartGame() {
    enableButton()
    humanScore = 0;
    computerScore = 0;
    computerResult.textContent = `${computerScore}`;
    playerResult.textContent = `${humanScore}`;
    document.querySelector(".start-text").style.display = "block";
    document.querySelector(".results").style.display = "none";
    document.querySelector(".names").style.display = "none";
    document.querySelector(".results2").style.display = "none";
    boxResult1.textContent = '';
}
document.querySelector(".results").style.display = "none";
document.querySelector(".names").style.display = "none";
document.querySelector(".results2").style.display = "none";

function playRound(humanChoice) {
    let computerChoice = getComputerChoice().toLowerCase();
     document.querySelector(".start-text").style.display = "none";
     document.querySelector(".results").style.display = "block";
     document.querySelector(".names").style.display = "block";
     document.querySelector(".results2").style.display = "block";

     if (humanChoice === computerChoice) {
        boxResult1.textContent = `Tie`;
        boxResult2.textContent = `${humanChoice} = ${computerChoice}`;

         computerResult.textContent = `${computerScore}`;
         playerResult.textContent = `${humanScore}`;
    } else if (humanChoice === "kamień" && computerChoice === "nożyce" ||
        humanChoice === "papier" && computerChoice === "kamień" ||
        humanChoice === "nożyce" && computerChoice === "papier") {
        humanScore++;
         boxResult1.textContent = `you win`;
         boxResult2.textContent = `${humanChoice} bit a ${computerChoice}`;
         playerResult.textContent = `${humanScore}`;
    } else {
        computerScore++;
         boxResult1.textContent =`Computer win`;
         boxResult2.textContent =`${computerChoice} bit a ${humanChoice}`;
         computerResult.textContent = `${computerScore}`;
    }
    if (humanScore === 5 || computerScore === 5) {
        // Determine the winner and update the outcome text
        if (humanScore > computerScore) {
            boxResult1.textContent = `you won game`;
        } else {
            boxResult1.textContent = `You lost... Oponent won game`;
        }
        disableButton()
    }
}


function showValue(name){
startText.textContent = `${name}`;
}
buttonRock.addEventListener('click',() => playRound("kamień"))
buttonPaper.addEventListener('click',() =>  playRound("papier"))
buttonScissors.addEventListener('click',() =>  playRound("nożyce"))
buttonRestart.addEventListener('click', () => restartGame());


// older work:
// let i = 1;
// function playGame(){
//     while (!(humanScore === 5) || !(computerScore === 5)) {
//         alert(`Round ${i++}`)
//         playRound();
//         if (humanScore === 5 || computerScore === 5) {
//             // Determine the winner and update the outcome text
//             if (humanScore > computerScore) {
//                 alert(`you won game`);
//                 break;
//             } else {
//                 alert(`Oponent won game`)
//                 break;
//             }
//         }
//     }
// }

// playGame()