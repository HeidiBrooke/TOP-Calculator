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
    console.log(result);
    return result;
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

function displayUpdate(e){
    let num = e.target.innerHTML;
    console.log(num);
    let display = document.getElementById('display');
    console.log(display);
    if(operationValue !== '0'){
        displayValue += num;
        display.textContent = displayValue;
        console.log("operating!")
        displayValue = operate(operationValue, valueOne, displayValue);
        display.textContent = displayValue;
    }
    else {
        if(displayValue === '0'){
            console.log("replacing 0");
            displayValue = num;
            display.textContent = displayValue;
            return
        }
        {
            console.log("adding the next num");
            displayValue += num;
            display.textContent = displayValue;
        }
    }

    
}

function storeFirstSet(e){
    console.log("storing!")
    valueOne = displayValue;
    operationValue = e.target.innerHTML;
    console.log(operationValue);
    displayValue = "";
    display.textContent = displayValue;
}

function addListeners(){
    const divs = document.querySelectorAll('.numbers'); 
    console.log(divs);
    divs.forEach(div => div.addEventListener('click', displayUpdate));

    const ops = document.querySelectorAll('.rightOperators');
    ops.forEach(op => op.addEventListener('click', storeFirstSet));
}

addListeners();
// const divs = document.querySelectorAll('.number');
// console.log(divs);
// divs.forEach(div => div.addEventListener('click', displayUpdate));