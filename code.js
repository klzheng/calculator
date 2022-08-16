let previousNumber = "";
let currentNumber = "";
let operation = "";

const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const miniScreen = document.querySelector(".mini-screen")
const screen = document.querySelector(".screen")
const deleteButton = document.querySelector(".delete")
const clearButton = document.querySelector(".clear")
const decimalButton = document.querySelector(".decimal")
const addButton = document.querySelector(".add")
const subtractButton = document.querySelector(".subtract")
const multiplyButton = document.querySelector(".multiply")
const divideButton = document.querySelector(".divide")
const evaluateButton = document.querySelector(".evaluate")


decimalButton.addEventListener("click", () => addDecimal())
addButton.addEventListener("click", () => add())
subtractButton.addEventListener("click", () => subtract())
multiplyButton.addEventListener("click", () => multiply())
divideButton.addEventListener("click", () => divide())
evaluateButton.addEventListener("click", () => evaluate())
deleteButton.addEventListener("click", () => deleteInput())
clearButton.addEventListener("click", () => clearAll())
numberButtons.forEach((number) => number.addEventListener("click", () => appendNumber(number.value)))


function appendNumber(number) {
    if (screen.textContent.length < 12){
        screen.textContent += number
        if (miniScreen.textContent.includes("=") === false) {
            miniScreen.textContent += number
        } 
    }
}

function deleteInput() {
    screen.textContent = screen.textContent.slice(0,-1)
    if (miniScreen.textContent.includes("=") === false) {
        miniScreen.textContent = miniScreen.textContent.slice(0,-1)
    }
}

function clearAll() {
    screen.textContent = ""
    miniScreen.textContent = ""
    previousNumber = ""
    currentNumber = ""
    operation = ""
}

function storeSetClearDisplay() {
    previousNumber = Number(screen.textContent)
    miniScreen.textContent = screen.textContent
    screen.textContent = ""
}

function addDecimal() {
    switch (screen.textContent.includes(".")) {
        case false:
            screen.textContent += "."
            miniScreen.textContent += "."
    }
}

function add() {
    if (miniScreen.textContent.includes("+") === false || 
        miniScreen.textContent.charAt(miniScreen.textContent.length-1) != "+") {
        if (operation == "") {
            operation = "add"
            storeSetClearDisplay()
            miniScreen.textContent += " + "
            return
        } evaluate()
    }
}

function subtract() {
    if (miniScreen.textContent.includes("−") === false || 
        miniScreen.textContent.charAt(miniScreen.textContent.length-1) != "−"){
        if (operation == "") {
            operation = "subtract"
            storeSetClearDisplay()
            miniScreen.textContent += " − "
            return
        } evaluate()
    }
}

function multiply() {
    if (miniScreen.textContent.includes("×") === false || 
        miniScreen.textContent.charAt(miniScreen.textContent.length-1) != "×") {
        if (operation == "") {
            operation = "multiply"
            storeSetClearDisplay()
            miniScreen.textContent += " × "
            return
        } evaluate()
    }
}

function divide() {
    if (miniScreen.textContent.includes("÷") === false || 
        miniScreen.textContent.charAt(miniScreen.textContent.length-1) != "÷") {
        if (operation == "") {
            operation = "divide"
            storeSetClearDisplay()
            miniScreen.textContent += " ÷ "
            return
        } evaluate()
    }
}

function evaluate() {
    currentNumber = (Number(screen.textContent))
    if (miniScreen.textContent.includes("=") === false) {
        switch (operation) {
            case ("add"): 
                screen.textContent = parseFloat((previousNumber + currentNumber).toFixed(4))
                break;
            case ("subtract"):
                screen.textContent = parseFloat((previousNumber - currentNumber).toFixed(4))
                break;
            case ("multiply"):
                screen.textContent = parseFloat(Math.round((previousNumber * currentNumber)*10000)/10000)
                break;
            case ("divide"):
                screen.textContent = parseFloat(Math.round((previousNumber / currentNumber)*10000)/10000)
        }
        operation = ""
        miniScreen.textContent += " = "
    }
}


window.addEventListener("keydown", (event) => {
    let button = event.key
    switch (isNaN(button)) {
        case false:
            appendNumber(button)
    }
    switch (button) {
        case "+":
            add()
            break
        case "-":
            subtract()
            break
        case "/":
            divide()
            break;
        case "*":
            multiply()
            break
        case ".":
            addDecimal()
            break
        case "Enter":
            evaluate()
            break
        case "Delete":
            clearAll()
            break
        case "Backspace":
            deleteInput()
            break
    }
})