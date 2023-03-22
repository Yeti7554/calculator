let operator = "+";

function operate(a, b) {
    if (operator === "+"){
        return a+b} 
    else if (operator === "-") {
        return a-b;
    }
    else if (operator === "/") {
        return a/b;
    } else if (operator === "*") {
        return a*b;
    } else {
        return "error";
    }

}

let displayText = 0

function populate(a) {
    let displayText = a;
    const display = document.getElementById("display");
    display.innerHTML = `${displayText}`;
    display.style.color = 'white';
}

const display = document.getElementById("display");
display.innerHTML = `${displayText}`;
display.style.color = 'white';

