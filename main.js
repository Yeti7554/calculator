// https://www.youtube.com/watch?v=2L30sFBxUyw&t=1026s

let currentNumber = "";
let previousNumber = "";
let operator = "";

const current = document.querySelector(".currentNum");
const previous = document.querySelector(".previousNum");



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



// if operator is empty
// if a is empty populate a
// if a is greater or equal to 0, append with number

// if operator is not empty
// if b is empty populate b
// if b is greater or equal to 0, append with number


const numButtons = document.querySelectorAll(".numbers");

const clear = document.querySelector(".reset")



numButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    })
});



function handleNumber(number) {
    if (currentNumber.length < 11) {
        currentNumber += number;
        current.textContent = currentNumber;
    };
};

clear.addEventListener("click", (e) => {
    currentNumber = "";
    previousNumber = "";
    current.textContent = 0;
})