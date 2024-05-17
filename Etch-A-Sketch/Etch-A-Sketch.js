let buttonCreate = document.querySelector(".btnCreate");
let gridBox = document.querySelector(".grid");

buttonCreate.addEventListener('click',()=> createVariables());
let number = document.querySelector(".number")

function createVariables(){
    let accounts = [];
    let multiple = (number.value * number.value)
    let xBox = Math.sqrt(1048576/multiple)
    let xBoxToString = xBox.toString()
    for (let i = 0; i < multiple; ++i) {
        accounts[i] = `box${i}`;
        accounts[i] = document.createElement("div")
        // accounts[i].classList.add("boxStyle")
        accounts[i].style.boxSizing="border-box";
        accounts[i].style.border="1px solid white";
        accounts[i].style.width=`${xBoxToString}`;
        accounts[i].style.height=`${xBoxToString}`;
        gridBox.appendChild(accounts[i])
    }
}