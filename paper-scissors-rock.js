let symbol;
function getComputerChoice() {
    let randomNumber = (Math.random() * 100.).toFixed();

    if (randomNumber < 34) {
        symbol = 1;
        stringComputerChoice()
    } else if (randomNumber > 33 && randomNumber < 67) {
        symbol = 2;
        stringComputerChoice()
    } else {
        symbol = 3;
        stringComputerChoice()
    }
    return symbol;
}

let stringComputerChoice = () => {
    let text = "";
    if (symbol === 1) {
        return "scissors"
    } else if (symbol === 2) {
        return "rock"
    } else return "paper"
}

let playerResult = 0;
let computerResult = 0;

function playRound(computer, player) {
    if (player > computer) {
        playerResult += 1;
        alert(`Player win, his score: ${playerResult}, and computer's score: ${computerResult}`)
    } else if (player === computer) {
        alert("Draw...")
    } else {
        computerResult += 1;
        alert(`Computer win, his score: ${computerResult}, and player's score: ${playerResult}`)
    }
}

// let playerSelection = (answer) => {
//     answer = prompt("papier,kamień,nożyce?").toLowerCase();
//     if (answer.includes("nozyce") || answer.includes("nożyce")) {
//         return 1;
//     } else if (answer.includes("kamień") || answer.includes("kamien")) {
//         return 2;
//     } else if (answer.includes("papier")) {
//         return 3;
//     } else {
//         alert("Nie ma takiego symbolu")
//     }
// }


function playerSelection (b) {
    if (b.target.value.includes('rock')){
        console.log("rock")
        return 2;
    }else if (b.target.value.includes('paper')) {
        console.log("paper")
        return 3;
    }else if (b.target.value.includes('scissors')) {
        console.log("scissors")
        return 1;
    }
}

let buttons = document.querySelectorAll(".btton");
for (let button of Array.from(buttons)){
    button.addEventListener('click', playerSelection)
}

let playGame = () => {
    for (let i = 1; i <= 5; i++) {
        alert(`game round ${i}`)
        playRound(getComputerChoice(), playerSelection())
    }
    if (playerResult > computerResult) {
        alert("player win this game")
    } else if (playerResult < computerResult) {
        alert("player lost the game")
    } else {
        alert("draw...")
    }
    playerResult = 0
    computerResult = 0
}
playGame()