const btns = document.querySelectorAll('.button');

let result = "";
let num1 = 0;
let num2 = 0;


btns.forEach(button => {
    button.addEventListener('click', handleClick);
});
function handleClick(event) {
    let buttonValue = event.target.value;
    buttonValue = num1;
    console.log('Button clicked:', num1);
    
}

function operate(a, b, operator){
    if (operator === "+"){
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
}