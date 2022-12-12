const buttons = document.querySelectorAll('button');
const display = document.getElementById('display-screen');

let displayValue = '0'
    , firstOperand = null
    , secondOperand = null
    , firstOperator = null
    , secondOperator = null
    , result = null;

const enteredOperator = operator => {
    if (firstOperator != null && secondOperator === null) {
        secondOperator = operator;
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        displayValue = roundOff(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else if (firstOperator != null && secondOperator != null) {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        secondOperator = operator;
        displayValue = roundOff(result, 15).toString();
        firstOperand = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstOperand = displayValue;
    }
}

const equalSign = () => {
    if (firstOperator === null) displayValue = displayValue;
    else if (secondOperator != null) {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), secondOperator);
        if (result === 'lmao') displayValue = 'lmao';
        else {
            displayValue = roundOff(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    } else {
        secondOperand = displayValue;
        result = operate(Number(firstOperand), Number(secondOperand), firstOperator);
        if (result === 'lmao') displayValue = 'lmao';
        else {
            displayValue = roundOff(result, 15).toString();
            firstOperand = displayValue;
            secondOperand = null;
            firstOperator = null;
            secondOperator = null;
            result = null;
        }
    }
}

const clickButton = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            if (buttons[i].classList.contains('number-btn')) {
                enteredNumber(buttons[i].innerHTML);
                updateDisplay();
            } else if (buttons[i].classList.contains('operator-btn')) {
                enteredOperator(buttons[i].innerHTML);
            } else if (buttons[i].classList.contains('equal-btn')) {
                equalSign();
                updateDisplay();
            } else if (buttons[i].classList.contains('decimal-btn')) {
                addDecimal(buttons[i].innerHTML);
                updateDisplay();
            } else if (buttons[i].classList.contains('percent-btn')) {
                ConvertToPercent(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('sig-btn')) {
                addSign(displayValue);
                updateDisplay();
            } else if (buttons[i].classList.contains('clear-btn')) {
                clearDisplay();
                updateDisplay();
            }
        })
    }
}

clickButton();

const enteredNumber = number => {
    if (firstOperator === null) {
        if (displayValue.toString() === '0') displayValue = number;
        else if (displayValue === firstOperand) displayValue = number;
        else displayValue += number;
    } else {
        if (displayValue === firstOperand) displayValue = number;
        else displayValue += number;
    }
}

const addDecimal = decimal => {
    if (displayValue === firstOperand || displayValue === secondOperand) {
        displayValue = '0';
        displayValue += decimal;
    } else if (!displayValue.includes(decimal)) displayValue += decimal;
}

const clearDisplay = () => {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

const updateDisplay = () => {
    display.innerText = displayValue;
    if (displayValue.length > 9) display.innerText = displayValue.substring(0, 9);
}

updateDisplay();

const operate = (firstNum, secondNum, operator) => {
    if (operator === '+') return firstNum + secondNum;
    else if (operator === '-') return firstNum - secondNum;
    else if (operator === 'x') return firstNum * secondNum;
    else if (operator === '/') {
        if (secondNum === 0) return 'Error';
        else return firstNum / secondNum;
    }
}

const convertToPercent = (number) =>
    displayValue = (number / 100).toString();

const addSign = (number) =>
    displayValue = (number * -1).toString();

const roundOff = (number, places) =>
    parseFloat(Math.round(number + 'e' + places) + 'e-' + places);