const calculatorButtons = document.getElementsByTagName('button');

const clickButton = () => {
    for (let i = 0; i < calculatorButtons.length; i++) {
        calculatorButtons[i].addEventListener('click', () => {
            if (calculatorButtons[i].classList.contains('number-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('clear-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('operator-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('decimal-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('sign-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('percent-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else if (calculatorButtons[i].classList.contains('equal-btn')) {
                console.log(calculatorButtons[i].innerHTML)
            } else return
        });
    }
}

clickButton();

const operate = (firstNumber, secondNumber, operator) => {
    if (operator === '+') return firstNumber + secondNumber;
    else if (operator === '-') return firstNumber - secondNumber;
    else if (operator === '*') return firstNumber * secondNumber;
    else if (operator === '/') return firstNumber / secondNumber;
    else return;
}

const updateDisplay = () => {
    let answer = operate(20, 20, 'plus');
    document.getElementById('display-screen').textContent = answer;
}

const clearDisplay = () =>
    document.getElementById('display-screen').textContent = "0";
