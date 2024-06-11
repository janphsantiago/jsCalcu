const btns = document.querySelectorAll('.button');
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const calcScreen = document.getElementById("calcScreen");
const calcOpera = document.getElementById("calcOpera");
const backspaceBtn = document.getElementById("del");
const negastar = document.getElementById("negats");
const percentage = document.getElementById("percent");
let decimalClicked = false;

let num1 = [];
let num2 = [];
let operator = null;
let result = 0;
let finalResult = 0;

btns.forEach(button => {
    button.addEventListener('click', handleClick);
});



function handleClick(event) {
    let buttonValue = event.target.value;
   
    if (!isNaN(buttonValue) || buttonValue === ".") {
        if (buttonValue === '.' && decimalClicked) {
            return;
        }
        
        if (operator === null) {
            num1 += buttonValue;
            if (buttonValue === '.') {
                decimalClicked = true;
            }
        } 

        else {
            num2 += buttonValue;
            if (buttonValue === '.') {
                decimalClicked = true;
            }
        }
    }
    
    // If the clicked button is an operator
    else {
        if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') 
        {
            operator = buttonValue;
            decimalClicked = false;
        }

    }
    calcScreen.textContent = buttonValue;
    calcOpera.textContent = num1 + (operator !== null ? " " + operator + " " + num2 : "") ;

}

//TURN NUMBER INTO NEGATIVE
percentage.addEventListener("click", porsyento);
function porsyento() {
    if (operator === null) {
        num1 = parseFloat(num1 / 100).toFixed(2) ;
        calcScreen.textContent = num1;
    } else {
        num2 = parseFloat(num2 / 100).toFixed(2) ;
        calcScreen.textContent = num1 + " " + operator + " " + num2;
    }
}

//TURN NUMBER INTO NEGATIVE
negastar.addEventListener("click", negatification);
function negatification() {
    if (operator === null) {
        num1 = (num1 * -1);
        calcScreen.textContent = num1;
    } else {
        num2 = (num2 * -1);
        calcScreen.textContent = num1 + " " + operator + " " + num2;
    }
}

backspaceBtn.addEventListener("click", blankSpace);
function blankSpace() {
    if (operator === null) {
        num1 = num1.slice(0, -1); // Remove the last character from num1
        calcScreen.textContent = num1;
    } else {
        num2 = num2.slice(0, -1); // Remove the last character from num2
        calcScreen.textContent = num1 + " " + operator + " " + num2;
    }
}

//CLEAR BUTTON
clear.addEventListener("click", function () {
    calcScreen.textContent = "";
    calcOpera.textContent = null;
    num1 = "";
    num2 = "";
    operator = null;
    result = 0;
    finalResult = 0;
    decimalClicked = false;
    });


equals.addEventListener("click", function () {
        if (operator === "+"){
            result = parseFloat(num1) + parseFloat(num2);
        }
        else if (operator === '-') {
            result = num1 - num2;
        }
        else if (operator === '*') {
            result = num1 * num2;
        }
        else if (operator === '/'){
            if (parseFloat(num2) === 0){
            result = 'No No Pilit';
            }
            
            else{
                result = parseFloat(num1) / parseFloat(num2);
        
            }
        }
    finalResult = result.toFixed(2);
    calcScreen.textContent = finalResult;

    });