let nums = document.querySelectorAll(".number");
let operand = document.querySelectorAll(".operand")
let display = document.querySelector("#display");
let firstNum = null, operator = null, secondNum = null, currentVal = null;

nums.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(button.textContent);

        if (display.textContent.length >= 8) {
            return;
        }

        if(button.textContent === "."){
            let containsDot = display.textContent.includes(".");
            if(containsDot){
                return;
            }
        }

        if(operator === null){
            if(firstNum === null){
                display.textContent = button.textContent;
            }
            else{
                display.textContent += button.textContent;
            }
            firstNum = Number(display.textContent);
            console.log(`first: ${firstNum}`)
        }
        else{
            if(secondNum === null){
                display.textContent = button.textContent;
            }
            else{
                display.textContent += button.textContent;
            }
            secondNum = Number(display.textContent);
            console.log(`second: ${secondNum}`) 
        }
    });
});

operand.forEach(function(button){
    button.addEventListener("click",function(){
        console.log(button.textContent);
        if (operator !== null && secondNum !== null) {
            operate(firstNum, operator, secondNum);
            display.textContent = currentVal;
            firstNum = currentVal;
            secondNum = null;
        }
        operator = button.textContent;
    });
});

document.getElementById("=").addEventListener("click", function(){
    if (operator !== null && firstNum !== null && secondNum === null) {
        secondNum = Number(display.textContent);
    }
    if (operator !== null && firstNum !== null && secondNum !== null) {
        operate(firstNum, operator, secondNum);
        display.textContent = currentVal;
        firstNum = currentVal;
        operator = null;
        secondNum = null;
    }
});
document.getElementById("clear").addEventListener("click",function(){
    firstNum = null;
    operator = null;
    secondNum = null;
    currentVal = null;
    display.textContent = "0";
});
document.getElementById("invert").addEventListener("click", function(){
    display.textContent = -Number(display.textContent);
    if(secondNum === null){
        firstNum = Number(display.textContent);
    }
    else{
        secondNum = Number(display.textContent);
    }
});
document.getElementById("percent").addEventListener("click",function(){
    display.textContent = Number(display.textContent)/100;
    if(secondNum === null){
        firstNum = Number(display.textContent);
    }
    else{
        secondNum = Number(display.textContent);
    }   
});

function add(a,b){
    console.log(a+b);
    return a + b;
}

function subtract(a,b){
    console.log(a-b);
    return a - b;
}

function multiply(a,b){
    console.log(a*b);
    return a * b;
}

function divide(a,b){
    console.log(a/b);
    return a / b;
}

function operate(firstNum,operator,secondNum){
    if(operator === "+"){
        currentVal = add(firstNum,secondNum).toFixed(6);
    }
    else if(operator === "-"){
        currentVal = subtract(firstNum,secondNum).toFixed(6);
    }
    else if(operator === "*"){
        currentVal = multiply(firstNum,secondNum).toFixed(6);
    }
    else if(operator === "/"){
        currentVal = divide(firstNum,secondNum).toFixed(6);
    }

    currentVal = parseFloat(currentVal);
    operator = null;
    firstNum = currentVal;
}

