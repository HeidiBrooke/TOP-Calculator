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
    console.log("result is: ", result);
    resultAsString = result.toString();
    return resultAsString;
}

//initial Values
let lastButtonPressed = '';
let operators = ['+','-','/','*'];
let displayValue = '0';
let valueOne = 0;
let valueTwo = 0;
let operationValue = "0";
let operationValue2 = "0";

function displayUpdate(e){
    let num = e.target.innerHTML;
    console.log(typeof lastButtonPressed);
    let display = document.getElementById('display');
    if((operationValue !== '0') && (operationValue2 !== '0')){
        //Case 4: Operating
        displayValue = operate(operationValue, valueOne, displayValue);
        display.textContent = displayValue;
        //scootch all values over to reset
        valueOne = displayValue;
        valueTwo = '0';
        operationValue = operationValue2;
        operationValue2 = '0';
        displayValue = '';
    }
    else if (operationValue !== '0') {
        //Case 3: Adding second value
        displayValue += num;
        display.textContent = displayValue;
        
    }
        else {
            if(displayValue === '0'){
                //Case 1: Adding first value
                displayValue = num;
                display.textContent = displayValue;
                return
            }
            {
                //Case 2: Adding on digits
                
                displayValue += num;
                display.textContent = displayValue;
                
            }
        }
        console.log(valueOne, valueTwo, displayValue, operationValue, operationValue2, lastButtonPressed);
}

function storeNumAndOp(e){
    console.log("operators", operators);
    console.log("lastbuttonpressed", lastButtonPressed);
    if ((operators.includes(lastButtonPressed)) && (operators.includes(e.target.innerHTML))){
        console.log("pressed same button twice");
        operationValue = e.target.innerHTML;
        console.log(valueOne, valueTwo, displayValue, operationValue, operationValue2, lastButtonPressed);
        return
        }
    if (operationValue === '0'){
        valueOne = displayValue;
        operationValue = e.target.innerHTML;
        displayValue = "";
        lastButtonPressed = e.target.innerHTML;
        
    }
    else if (operationValue === '='){
        operationValue = e.target.innerHTML;
        valueTwo = displayValue;
        displayValue = "";
        lastButtonPressed = e.target.innerHTML;
        }
        else {
            valueTwo = displayValue;
            operationValue2 = e.target.innerHTML;
            lastButtonPressed = e.target.innerHTML;
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

function decimalAdder(e){
    let num = displayValue;
    if (num.includes('.')){
        return
    }
    else {
        displayUpdate(e);
    }
}

function addListeners(){
    const divs = document.querySelectorAll('.numbers'); 
    divs.forEach(div => div.addEventListener('click', displayUpdate));

    const decimal = document.querySelector('.decimal');
    decimal.addEventListener('click', decimalAdder)

    const ops = document.querySelectorAll('.rightOperators');
    ops.forEach(op => op.addEventListener('click', storeNumAndOp));

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearAll);

    const equalButton = document.querySelector('.equals');
    equalButton.addEventListener('click', storeNumAndOp);
}

addListeners();
