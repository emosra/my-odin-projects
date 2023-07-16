let currentNum;
let currentOperator;
let currentNum2;

const operate = (num1, operator, num2) => {
    // if current operator * then multiply
    // so on
    // so on
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

    let difference = 0;

    for (let i = 0; i < args.length; i++) {
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