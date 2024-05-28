let buttonCreate = document.querySelector(".btnCreate");
let gridBox = document.querySelector(".grid");
let number = document.querySelector(".number");
let color = document.querySelector(".btnRandomColor");
let clicked = false;
number.addEventListener('click', () => {
    while (gridBox.firstChild) {
        gridBox.removeChild(gridBox.firstChild);
        number.value = '';
        clicked = false;
    }
})
function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}


function createVariables() {
    while (number.value > 100) {
        alert('musisz podać liczbę mniejszą lub równą 100')
        number.value = '';
    }
    let multiple = (number.value * number.value)
    let xBox = Math.sqrt(1048576 / multiple)
    let accounts = [];
    for (let i = 0; i < multiple; ++i) {
        accounts[i] = `box${i}`;
        accounts[i] = document.createElement("div")
        accounts[i].classList.add("boxStyle", `div${i}`)
        accounts[i].style.width = `${xBox}px`;
        accounts[i].style.height = `${xBox}px`;
        gridBox.appendChild(accounts[i])
        if (clicked === true){
            accounts[i].addEventListener('mouseover', () => {
                const colorRandom = `rgba(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()},1)`;
                accounts[i].style.backgroundColor = colorRandom;
                accounts[i].style.borderColor =  colorRandom;
            });
        }else{
            accounts[i].addEventListener('mouseover', () => {
                accounts[i].style.backgroundColor = `black`;
                accounts[i].style.borderColor = 'black';
            });
        }

    }
}


color.addEventListener('click', () => {clicked = true})
buttonCreate.addEventListener('click', () => createVariables());