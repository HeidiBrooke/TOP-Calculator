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
let justOperated = false;
let displayValue = '0';
let valueOne = 0;
let valueTwo = 0;
let operationValue = "0";
let operationValue2 = "0";

function displayUpdate(e){
    removeRipple(); 
    let num = e.target.innerHTML;
    lastButtonPressed = num;
    let display = document.getElementById('display');
    if((operationValue !== '0') && (operationValue2 !== '0')){
        //Case 4: Operating
        displayValue = operate(operationValue, valueOne, displayValue);
        justOperated = true;
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
        justOperated = false;
        
    }
        else {
            if(displayValue === '0'){
                //Case 1: Adding first value
                displayValue = num;
                display.textContent = displayValue;
                justOperated = false;
                return
            }
            {   //Case 2: Adding on digits
        
                displayValue += num;
                display.textContent = displayValue;
                justOperated = false;
                
            }
        }
           
        
}

function storeNumAndOp(e){
    removeRipple();  
    //pressed same button twice - do nothing
    if ((operators.includes(lastButtonPressed)) && 
        (operators.includes(e.target.innerHTML))){
        operationValue = e.target.innerHTML;
        console.log(lastButtonPressed);
        console.log(valueOne, valueTwo, operationValue, operationValue2, displayValue);
        console.log("I think I pressed the same button")
        return
        }
    //fresh slate
    if (operationValue === '0'){
        valueOne = displayValue;
        operationValue = e.target.innerHTML;
        displayValue = "";
        lastButtonPressed = e.target.innerHTML;
        
    }
    //pressed =
    else if (operationValue === '='){
        operationValue = e.target.innerHTML;
        valueTwo = displayValue;
        displayValue = "";
        lastButtonPressed = e.target.innerHTML;
        }
        //second operator pressed
        //execute the first(old) operation
        //store event as the new 1st operator
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
    justOperated = false;
}

function decimalAdder(e){
    if(justOperated === true){
        return
    }
    let num = displayValue;
    if (num.includes('.')){
        return
    }
    else {
        displayUpdate(e);
    }
}

function backSpace(e){
    if (justOperated === true){
        return
    }
    displayValue = displayValue.substring(0, displayValue.length-1);
    display.textContent = displayValue;
}

function addListeners(){
    const divs = document.querySelectorAll('.numbers'); 
    divs.forEach(div => div.addEventListener('click', displayUpdate));
    divs.forEach(div => div.addEventListener('click', createRipple));

    const decimal = document.querySelector('.decimal');
    decimal.addEventListener('click', decimalAdder);
    decimal.addEventListener('click', createRipple);

    const ops = document.querySelectorAll('.rightOperators');
    ops.forEach(op => op.addEventListener('click', storeNumAndOp));
    ops.forEach(op => op.addEventListener('click', createRipple));

    const clearButton = document.querySelector('.clear');
    clearButton.addEventListener('click', clearAll);
    clearButton.addEventListener('click', createRipple);

    const equalButton = document.querySelector('.equals');
    equalButton.addEventListener('click', storeNumAndOp);
    equalButton.addEventListener('click', createRipple);

    const backButton = document.querySelector('.backspace');
    backButton.addEventListener('click', backSpace);
    backButton.addEventListener('click', createRipple);
}

addListeners();

//ripple button effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
    circle.classList.add("ripple"); 
    const ripple = button.getElementsByClassName("ripple")[0];
    if (ripple) {
        ripple.remove();
    }
    button.appendChild(circle);
  }

  function removeRipple(){
    const items = document.querySelectorAll("span.ripple");
    for (let item of items) {
         item.remove();
    }
  }
