let previousNumber = "";
let currentNumber = "";
let operation = "";

const numberButtons = document.querySelectorAll(".number")
const miniScreen = document.querySelector(".mini-screen")
const screen = document.querySelector(".screen")

numberButtons.forEach((number) => number.addEventListener("click", () => appendNumber(number)))

function appendNumber(number) {
    console.log(typeof(number.value))
    screen.textContent += number.value
}

function clearDisplay() {
    screen.textContent = ""
    miniScreen.textContent = ""
    previousNumber = ""
    currentNumber = ""
    operation = ""

}

function add() {
    if (operation == "") {
        previousNumber = parseInt(screen.textContent)
        screen.textContent = ""
        miniScreen.textContent += "+"
        operation = "add"
    } else {
        operator()
    }
}

function subtract() {
    if (operation == "") {
        previousNumber = parseInt(screen.textContent)
        screen.textContent = ""
        miniScreen.textContent += "-"
        operation = "subtract"
    } else {
        operator()
    }
}

function multiply() {
    if (operation == "") {
        previousNumber = parseInt(screen.textContent)
        screen.textContent = ""
        miniScreen.textContent += "*"
        operation = "multiply"
    } else {
        operator()
    }
}

function divide() {
    if (operation == "") {
        previousNumber = parseInt(screen.textContent)
        screen.textContent = ""
        miniScreen.textContent += "/"
        operation = "divide"
    } else {
        operator()
    }
}

function operator() {
    currentNumber = (parseInt(screen.textContent))
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
    miniScreen.textContent = screen.textContent
}

