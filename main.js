// https://www.youtube.com/watch?v=2L30sFBxUyw&t=1026s

let currentNumber = "";
let previousNumber = "";
let operator = "";
let answer = "";

const current = document.querySelector(".currentNum");
const previous = document.querySelector(".previousNum");



function operate() {
    if (operator == "+"){
        answer = previousNumber+currentNumber;
        current.textContent = answer; 
    }
    else if (operator == "-") {
        answer = previousNumber-currentNumber;
        current.textContent = answer; 
    }
    else if (operator == "/") {
        answer = previousNumber/currentNumber;
        current.textContent = answer; 
    } else if (operator == "*") {
        answer = previousNumber*currentNumber;
        current.textContent = answer; 
    } else {
        current.textContent = "error"; 
    }

}



// if operator is empty
// if a is empty populate a
// if a is greater or equal to 0, append with number

// if operator is not empty
// if b is empty populate b
// if b is greater or equal to 0, append with number


const numButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operatorButtons")

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
    answer = "";
    current.textContent = 0;
    previous.textContent = "";
})

// Now build the operating function


operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        previousNumber = currentNumber;
        currentNumber = "";
        previous.textContent = previousNumber;
        current.textContent = 0; 
    })
})

function chooseOperator(op) {
    operator = op;
}



const equals = document.querySelector(".equal");

equals.addEventListener("click", (e) => {
    {
        if (operator == "+"){
            answer = parseInt(previousNumber)+ parseInt(currentNumber);
            current.textContent = answer; 
            previous.textContent = "";
        }
        else if (operator == "-") {
            answer = parseInt(previousNumber) - parseInt(currentNumber);
            current.textContent = answer; 
            previous.textContent = "";
        }
        else if (operator == "/") {
            answer = parseInt(previousNumber)/parseInt(currentNumber);
            current.textContent = answer; 
            previous.textContent = "";
        } else if (operator == "*") {
            answer = parseInt(previousNumber) * parseInt(currentNumber);
            current.textContent = answer; 
            previous.textContent = "";
        } else {
            current.textContent = "ERROR"; 
            previous.textContent = "";
        }
    
    }
})