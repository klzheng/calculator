let previousNumber = "";
let currentNumber = "";
let operation = "";

const numberButtons = document.querySelectorAll(".number")
const miniScreen = document.querySelector(".mini-screen")
const screen = document.querySelector(".screen")

numberButtons.forEach((number) => number.addEventListener("click", () => appendNumber(number)))


function appendNumber(number) {
    screen.textContent += number.value
    if (miniScreen.textContent.includes("=") === false) {
        miniScreen.textContent += number.value
    } 
    
}

function deleteInput() {
    screen.textContent = screen.textContent.slice(0,-1)
    if (miniScreen.textContent.includes("=") === false) {
        miniScreen.textContent = miniScreen.textContent.slice(0,-1)
    }
    
}

function clearDisplay() {
    screen.textContent = ""
    miniScreen.textContent = ""
    previousNumber = ""
    currentNumber = ""
    operation = ""

}

function add() {
    console.log()
    if (miniScreen.textContent.includes("+") === false || miniScreen.textContent.charAt(miniScreen.textContent.length-1) != "+") {
        if (operation == "") {
            previousNumber = Number(screen.textContent)
            miniScreen.textContent = screen.textContent
            screen.textContent = ""
            miniScreen.textContent += "+"
            operation = "add"
        } else {
            operator()
        }
    }
    
}

function subtract() {
    if (miniScreen.textContent.includes("-") === false) {
        if (operation == "") {
            previousNumber = Number(screen.textContent)
            miniScreen.textContent = screen.textContent
            screen.textContent = ""
            miniScreen.textContent += "-"
            operation = "subtract"
        } else {
            operator()
        }
    }
    
}

function multiply() {
    if (miniScreen.textContent.includes("*") === false) {
        if (operation == "") {
            previousNumber = Number(screen.textContent)
            miniScreen.textContent = screen.textContent
            screen.textContent = ""
            miniScreen.textContent += "*"
            operation = "multiply"
        } else {
            operator()
        }
    }
}

function divide() {
    if (miniScreen.textContent.includes("/") === false) {
        if (operation == "") {
            previousNumber = Number(screen.textContent)
            miniScreen.textContent = screen.textContent
            screen.textContent = ""
            miniScreen.textContent += "/"
            operation = "divide"
        } else {
            operator()
        }
    }
}

function operator() {
    currentNumber = (Number(screen.textContent))
    if (miniScreen.textContent.includes("=") === false) {
        switch (operation) {
            case ("add"): 
                screen.textContent = (previousNumber + currentNumber)
                break;
            case ("subtract"):
                screen.textContent = (previousNumber - currentNumber)
                break;
            case ("multiply"):
                screen.textContent = (previousNumber * currentNumber)
                break;
            case ("divide"):
                screen.textContent = (previousNumber / currentNumber)
        }
        operation = ""
        miniScreen.textContent += "="
    }
    
}

