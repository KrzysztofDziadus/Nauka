const resetBtn = document.querySelector('#reset')
const deleteBtn = document.querySelector('#delete')
const sumBtn = document.querySelector('#sum')
const actionDisplay = document.querySelector('#action')
const resultDisplay = document.querySelector('#result')
const allBtn = document.querySelectorAll("button")


// add sound to buttons
allBtn.forEach(button => {
    button.addEventListener('click', () => {
        const audio = new Audio("mouse-click.mp3")
        audio.play()
    })
})


let initialValue = '';
const DEAFULT_F_NUM = 0
const DEAFULT_S_NUM = 0
const DEAFULT_OP = ''

let newFirstNum = 0;
let initialValueSplit = []

let currentFirstNum = DEAFULT_F_NUM;
let currentSecondNum = DEAFULT_S_NUM;
let currentOperator = DEAFULT_OP;

const operators = ["+", "-", "*", "/", "%"];
const tools = ["=", "<", "DEL"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];


let initial = function () {
    allBtn.forEach(button => {
        button.addEventListener('click', () => {
            if (tools.includes(button.value)) {
                initialValue += ''
                actionDisplay.textContent += '';
            } else if (operators.includes(button.value)) {
                initialValue += ` ${button.value} `
                actionDisplay.textContent += ` ${button.value} `
            } else if (numbers.includes(button.value)) {
                initialValue += button.value
                actionDisplay.textContent += button.value
            }
        })
    })
    sumBtn.addEventListener('click', () => {
        initialValueSplit = initialValue.split(' ');
        console.log(initialValueSplit)
        currentFirstNum = +initialValueSplit[0]
        currentSecondNum = +initialValueSplit[2]
        currentOperator = initialValueSplit[1]
        switch (currentOperator){
            case '+':
                newFirstNum = currentFirstNum + currentSecondNum;
                resultDisplay.textContent = newFirstNum.toFixed(2);
                currentFirstNum = newFirstNum.toFixed(2);
                break;
            case '-':
                newFirstNum = currentFirstNum - currentSecondNum;
                resultDisplay.textContent = newFirstNum.toFixed(2);
                currentFirstNum = newFirstNum.toFixed(2);
                break;
            case '*':
                newFirstNum = currentFirstNum * currentSecondNum;
                resultDisplay.textContent = newFirstNum.toFixed(2);
                currentFirstNum = newFirstNum.toFixed(2);
                break;
            case '/':
                newFirstNum = currentFirstNum / currentSecondNum;
                resultDisplay.textContent = newFirstNum.toFixed(2);
                currentFirstNum = newFirstNum.toFixed(2);
                break;
            case '%':
                newFirstNum = currentFirstNum % currentSecondNum;
                resultDisplay.textContent = newFirstNum.toFixed(2);
                currentFirstNum = newFirstNum.toFixed(2);
                break;
            default:
                resultDisplay.textContent = 'ERROR';
        }
    })
}

initial()

function reset(){
    initialValue = ''
    currentOperator = ''
    currentSecondNum = ''
    currentFirstNum = ''
    resultDisplay.textContent = ''
    actionDisplay.textContent = ''
}

resetBtn.addEventListener('click', reset)

function back(){
    initialValue = initialValue.slice(0, -1)
    if (initialValue.charAt(initialValue.length - 1) === " "){
        console.log(true)
        initialValue = initialValue.slice(0, -1)
    }
    actionDisplay.textContent = initialValue;

}

deleteBtn.addEventListener('click', back)

