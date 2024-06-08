const btns = document.querySelectorAll('.button');

// Function to handle the click event
function handleClick(event) {
    // Do something when the button is clicked
    console.log(event.target.textContent);
}

// Add event listener to each button
btns.forEach(button => {
    button.addEventListener('click', handleClick);
});

function operate(a, b, operator){
    if (operator === "+"){
        return a + b;
    }
    else if (operator === '-') {
        return a - b;
    }
}