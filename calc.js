const btns = document.querySelectorAll('.button');
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

let result = "";
let num1 = [];
let num2 = [];
let operator = null;

btns.forEach(button => {
    button.addEventListener('click', handleClick);
});

function handleClick(event) {
    let buttonValue = event.target.value;

    console.log('Button clicked:', buttonValue);
    num1+= buttonValue;


    const calcScreen = document.getElementById("calcScreen");
    calcScreen.textContent = num1;
    
    clear.addEventListener("click", function () {
        calcScreen.textContent = "";
        num1 = [];
    });
}


function operate(a, b, operator){
    if (operator === "+"){
        return num1 + num2;
    }
    else if (operator === '-') {
        return a - b;
    }

}

equals.addEventListener("click", function () {
    
});
