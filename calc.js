const btns = document.querySelectorAll('.button');
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const calcScreen = document.getElementById("calcScreen");
const calcOpera = document.getElementById("calcOpera");

let num1 = [];
let num2 = [];
let operator = null;
let result = 0;

btns.forEach(button => {
    button.addEventListener('click', handleClick);
});


function handleClick(event) {
    let buttonValue = event.target.value;
   
    if (!isNaN(buttonValue)) {
        if (operator === null) {
            num1 = parseInt(num1.toString() + buttonValue);
        }
        else{
            num2 = parseInt(num2.toString() + buttonValue);
        }
    }
    // If the clicked button is an operator
    else {
        if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '%') 
        {
            operator = buttonValue;
            console.log('Operator:', operator);
        }

    }
    calcScreen.textContent = buttonValue;
    calcOpera.textContent = num1 + "" + operator+ "" + num2;
}

equals.addEventListener("click", function () {
        if (operator === "+"){
            result += (num1 + num2);
            console.log(result);
        }
        else if (operator === '-') {
            result += num1 - num2;
            console.log(result);
        }
        else if (operator === '*') {
            result += num1 * num2;
            console.log(result);
        }
        else if (operator === '/') {
            result += num1 / num2;
            console.log(result);
        }
    calcScreen.textContent = result;

    });

    //CLEAR BUTTON
    clear.addEventListener("click", function () {
    calcScreen.textContent = "";
    num1 = "";
    num2 = "";
    operator = null;
    result = 0;
    });