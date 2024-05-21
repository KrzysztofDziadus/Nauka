let buttonCreate = document.querySelector(".btnCreate");
let gridBox = document.querySelector(".grid");

buttonCreate.addEventListener('click',()=> createVariables());
let number = document.querySelector(".number")

number.addEventListener('click', () => {
    while (gridBox.firstChild){
        gridBox.removeChild(gridBox.firstChild);
        number.value = '';
    }})
let accounts = [];
function createVariables(){

    let multiple = (number.value * number.value)
    let xBox = Math.sqrt(1048576/multiple)
    for (let i = 0; i < multiple; ++i) {
        accounts[i] = `box${i}`;
        accounts[i] = document.createElement("div")
        accounts[i].classList.add("boxStyle", `div${i}`)
        accounts[i].style.width=`${xBox}px`;
        accounts[i].style.height=`${xBox}px`;
        gridBox.appendChild(accounts[i])

        accounts[i].addEventListener('mouseover', () => {
            console.log(accounts[i].style.backgroundColor='red');
        });
    }
}

// gridBox.addEventListener('mouseover',() => colorBox())
// function colorBox(e){
//     console.log(e.target.querySelector(accounts[1]))
//
// }
