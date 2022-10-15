//Basic functions +, -, *, /
function add(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function divide(num1, num2){
    return num1 / num2;
}

// console.log(add(10,2));
// console.log(subtract(10,2));
// console.log(multiply(10,2));
// console.log(divide(10,2));

//Operator
function operate(operator, num1, num2){
    console.log("operating");
    console.log("V1: ", valueOne, " V2: ", valueTwo, " DV: ", displayValue, " OP1: ", operationValue, " OP2: ", operationValue2);
    let result = null;
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator) {
        case '+': 
            result = add(num1,num2);
            break;
        case '-': 
            result = subtract(num1,num2);
            break;
        case '*': 
            result = multiply(num1,num2);
            break;
        case '/': 
            result = divide(num1,num2);
            break;
    }
    console.log("result is: ", result);
    resultAsString = result.toString();
    return resultAsString;
}

// console.log(operate('+', 10, 2));
// console.log(operate('-', 10, 2));
// console.log(operate('*', 10, 2));
// console.log(operate('/', 10, 2));
// const currentNumber;
// const display;
//display update function
let displayValue = '0';
let valueOne = 0;
let valueTwo = 0;
let operationValue = "0";
let operationValue2 = "0";

function displayUpdate(e){
    let num = e.target.innerHTML;
    console.log(num);
    let display = document.getElementById('display');
    if((operationValue !== '0') && (operationValue2 !== '0')){
        console.log("Case 4: operating!")
        displayValue = operate(operationValue, valueOne, displayValue);
        display.textContent = displayValue;
        //scootch all values over to reset
        valueOne = displayValue;
        valueTwo = '0';
        operationValue = operationValue2;
        // if (operationValue === '='){
        //     operationValue = '0';
        // }
        operationValue2 = '0';
        displayValue = '';
        console.log("V1: ", valueOne, " V2: ", valueTwo, " DV: ", displayValue, " OP1: ", operationValue, " OP2: ", operationValue2);
    }
    else if (operationValue !== '0') {
        console.log("Case 3: Adding new next value numbers")
        displayValue += num;
        display.textContent = displayValue;
        
    }
        else {
            if(displayValue === '0'){
                console.log("Case 1: Adding new numbers")
                displayValue = num;
                display.textContent = displayValue;
                console.log("display value is ", displayValue, ". Done.");
                return
            }
            {
                console.log("Case 2: Adding on numbers")
                displayValue += num;
                display.textContent = displayValue;
                console.log("display value is ", displayValue, ". Done.");
            }
        }
}

function storeFirstSet(e){
    if (operationValue === '0'){
        valueOne = displayValue;
        operationValue = e.target.innerHTML;
        displayValue = "";
        console.log("display value is ", displayValue);
        console.log("operationValue is ", operationValue);
        console.log("valueOne ", valueOne);
        //display.textContent = displayValue;
    }
    else if (operationValue === '='){
        operationValue = e.target.innerHTML;
        valueTwo = displayValue;
        displayValue = "";
        console.log("display value is ", displayValue);
        console.log("operationValue is ", operationValue);
        console.log("valueOne ", valueOne);

    }
    else {
        console.log("elsing!")
        valueTwo = displayValue;
        operationValue2 = e.target.innerHTML;
        console.log(operationValue2);
        displayUpdate(e);
    }
}

function clearAll(e){
    displayValue = '0';
    valueOne = 0;
    valueTwo = 0;
    operationValue = '0';
    operationValue2 = '0';
    display.textContent = displayValue;
}

// function equals(e){
//     displayValue = operate(operationValue, valueOne, displayValue);
//     display.textContent = displayValue;
//     operationValue2 = '0';
//     console.log("V1: ", valueOne, " V2: ", valueTwo, " DV: ", displayValue, " OP1: ", operationValue, " OP2: ", operationValue2);
//     displayValue = '';
//     valueOne = displayValue;
// }

function addListeners(){
    const divs = document.querySelectorAll('.numbers'); 
    divs.forEach(div => div.addEventListener('click', displayUpdate));

    const ops = document.querySelectorAll('.rightOperators');
    ops.forEach(op => op.addEventListener('click', storeFirstSet));

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearAll);

    const equalButton = document.querySelector('.equals');
    equalButton.addEventListener('click', storeFirstSet);
}

addListeners();
// const divs = document.querySelectorAll('.number');
// console.log(divs);
// divs.forEach(div => div.addEventListener('click', displayUpdate));