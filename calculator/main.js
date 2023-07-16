let currentNum;
let currentOperator;
let currentNum2;
let currTotal;


const displayValue = document.querySelector('.curr-input') 
const numBtns = document.querySelectorAll('.num')
const operatorBtns = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const prevCalc = document.querySelector('.prev-calc')
const displayTotal = document.querySelector('.curr-total')
const clearBtn = document.querySelector('.clear')

const operate = (num1, operator, num2) => {
    if (operator === '+') {
        return add(num1, num2)
    } else if (operator === '-') {
        return subtract(num1, num2)
    } else if (operator === '*') {
        return multiply(num1, num2)
    } else if (operator === '/') {
        return divide(num1, num2)
    }
}

const add = (...args) => {
    if (args[0] === undefined) return 'invalid'

    let sum = 0;

    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }

    return sum;
}

const subtract = (...args) => {
    if (args[0] === undefined) return 'invalid'

    let difference = args[0];

    for (let i = 1; i < args.length; i++) {
        difference -= args[i];
    }

    return difference;
}

const multiply = (...args) => {
    if (args[0] === undefined) return 'invalid'

    let product = args[0];

    for (let i = 1; i < args.length; i++) {
        product *= args[i];
    }

    return product;
}

const divide = (...args) => {
    if (args[0] === undefined) return 'invalid'

    let quotient = args[0];

    for (let i = 1; i < args.length; i++) {
        quotient /= args[i];
    }

    return quotient;
}

const resetNums = () => {
    currentNum = undefined;
    currentOperator = undefined;
    currentNum2 = undefined;
}

const resetCalc = () => {
    resetNums();
    displayValue.textContent = '0'
    prevCalc.textContent = '0'
    displayTotal.textContent = 0

}

clearBtn.addEventListener('click', resetCalc)

numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (displayValue.textContent === '0') {
            displayValue.textContent = '';
        }

        if (displayValue.textContent.length >= 10) return;

        displayValue.textContent += e.target.textContent
    })
})

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (!currentOperator) {
            currentNum = Number(displayValue.textContent);
            currentOperator = e.target.textContent
            displayValue.textContent = '0'
            return
        }

        if (currentNum && currentOperator) {
            currentNum2 = Number(displayValue.textContent)
            currTotal = operate(currentNum, currentOperator, currentNum2)
            
            prevCalc.textContent = `${currentNum} ${currentOperator} ${currentNum2}`
            displayTotal.textContent = currTotal;
            displayValue.textContent = '0'

            currentOperator = e.target.textContent
            currentNum = currTotal;
            return
        }

        if (currTotal && !currentNum) {
            currentNum = currTotal;
            currentOperator = e.target.textContent
            return
        }
    })
})

equalsBtn.addEventListener('click', (e) => {
    if (!currentOperator) return;

    currentNum2 = Number(displayValue.textContent);
    currTotal = operate(currentNum, currentOperator, currentNum2);
    displayValue.textContent = '0'

    prevCalc.textContent = `${currentNum} ${currentOperator} ${currentNum2}`
    displayTotal.textContent = currTotal;

    resetNums();
})