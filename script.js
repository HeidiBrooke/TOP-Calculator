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
    return result;
}

// console.log(operate('+', 10, 2));
// console.log(operate('-', 10, 2));
// console.log(operate('*', 10, 2));
// console.log(operate('/', 10, 2));
// const currentNumber;
// const display;
//display update function
function displayUpdate(e){
    let num = e.target.innerHTML;
    console.log(num);
    let display = document.getElementById('display');
    console.log(display);
    display.textContent = num;

}

function addListeners(){
    const divs = document.querySelectorAll('.numbers'); 
    console.log(divs);
    divs.forEach(div => div.addEventListener('click', displayUpdate));
}

addListeners();
// const divs = document.querySelectorAll('.number');
// console.log(divs);
// divs.forEach(div => div.addEventListener('click', displayUpdate));