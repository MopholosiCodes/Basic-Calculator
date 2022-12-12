const calculatorButtons = document.getElementsByTagName('button');
const displayScreen = document.getElementById('display-screen');
let firstNum = null
    , secondNum = null
    , operator = null
    , secondOperand = null
    , answer = null

// various button events
const clickButton = () => {
    for (let i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', () => {
            if (calculatorButtons[i].classList.contains('number-btn')) {
                storeEnteredNumbers(calculatorButtons[i].innerHTML)
                updateDisplay();
            } else if (calculatorButtons[i].classList.contains('clear-btn')) {
                clearDisplay();
            } else if (calculatorButtons[i].classList.contains('operator-btn')) {
                storeEnteredOperator(calculatorButtons[i].innerHTML);
                updateDisplay();
            } else if (calculatorButtons[i].classList.contains('decimal-btn')) {
                console.log(calculatorButtons[i].innerHTML);
            } else if (calculatorButtons[i].classList.contains('sign-btn')) {
                console.log(calculatorButtons[i].innerHTML);
            } else if (calculatorButtons[i].classList.contains('percent-btn')) {
                convertToPercentage(calculatorButtons[i].innerHTML);
            } else if (calculatorButtons[i].classList.contains('equal-btn')) {
                operate(firstNum, secondNum, operator);
                updateDisplay();
                firstNum = null;
                secondNum = null;
                operator = null;
                answer = null;
            } else return
        });
    }
}

clickButton();

// store enetered number
const storeEnteredNumbers = number => {
    if (firstNum === null && operator === null) firstNum = number;
    else if (firstNum !== null && operator === null) firstNum += number;
    else if (firstNum !== null && operator !== null) {
        if (secondNum === null) secondNum = number;
        else if (secondNum !== null) secondNum += number;
        else return;
    } else return;
}

// store entered operator
const storeEnteredOperator = enteredOperator => {
    if (operator === null) operator = enteredOperator;
    else return;
}

// perform the calculation
const operate = (firstNumber, secondNumber, operator) => {
    if (operator === '+') answer = Number(firstNumber) + Number(secondNumber);
    else if (operator === '-') answer = Number(firstNumber) - Number(secondNumber);
    else if (operator === 'x') answer = Number(firstNumber) * Number(secondNumber);
    else if (operator === '/') answer = Number(firstNumber) / Number(secondNumber);
    else return;
}

// update the display screen
const updateDisplay = () => {
    if (firstNum === null && operator === null) displayScreen.textContent = 0;
    else if (firstNum !== null && operator === null) displayScreen.textContent = firstNum;
    else if (firstNum !== null && operator !== null) {
        if (secondNum === null) displayScreen.textContent = 0;
        else if (secondNum !== null) {
            if (answer === null) displayScreen.textContent = secondNum;
            else displayScreen.textContent = answer;
        } else return;
    } else return;
    console.log(firstNum, operator, secondNum, answer);
}

updateDisplay();

// clear the diplay screen ad all saved inputs
const clearDisplay = () => {
    displayScreen.textContent = "0";
    firstNum = null;
    secondNum = null;
    answer = null;
    operator = null;
    console.log(firstNum, operator, secondNum, answer);
}

const convertToPercentage = enteredNumber => {

}

const convertToDecimal = enteredNumber => {

}

const convertToNegetiveNumber = enteredNumber => {

}
