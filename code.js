let previousNumber = "";
let currentNumber = "";
let operation = "";
let calculated = "on";


/** Declaring variables from document elements*/
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


/** Adding 'click' event listeners to declared variables */
decimalButton.addEventListener("click", () => addDecimal())
addButton.addEventListener("click", () => add())
subtractButton.addEventListener("click", () => subtract())
multiplyButton.addEventListener("click", () => multiply())
divideButton.addEventListener("click", () => divide())
evaluateButton.addEventListener("click", () => evaluate())
deleteButton.addEventListener("click", () => deleteInput())
clearButton.addEventListener("click", () => clearAll())
numberButtons.forEach((number) => number.addEventListener("click", () => appendNumber(number.value)))


/** Appends the clicked number to the display on press */
function appendNumber(number) {
    if (screen.textContent == "0" || calculated == "off"){
        screen.textContent = ""
        calculated = "on"
    }
    if (screen.textContent.length < 14){
        screen.textContent += number
        if (miniScreen.textContent.includes("=") === false) {
            miniScreen.textContent += number
        } else if (miniScreen.textContent.includes("=") === true) {
            miniScreen.textContent = "" + number
        }
    }
}


/** Deletes the latest number on press */
function deleteInput() {
    screen.textContent = screen.textContent.slice(0,-1)
    if (miniScreen.textContent.slice(-1) == " ") {
        miniScreen.textContent = miniScreen.textContent.slice(0,-1)
    }
    if (miniScreen.textContent.includes("=") === false) {
        miniScreen.textContent = miniScreen.textContent.slice(0,-1)
    }
    if (screen.textContent == "") {
        miniScreen.textContent = ""
    }
}


/** Clears display values and number stores  */
function clearAll() {
    screen.textContent = ""
    miniScreen.textContent = ""
    previousNumber = ""
    currentNumber = ""
    operation = ""
}


/** Stores displayed number in memory and displays it on mini-display, 
 *  then clears the main display */
function storeSetClearDisplay() {
    previousNumber = Number(screen.textContent)
    miniScreen.textContent = screen.textContent
    screen.textContent = ""
}


/** Adds decimal point to number */
function addDecimal() {
    if (screen.textContent.includes(".") == false) {
        if (screen.textContent == "") {
            screen.textContent += "0."
            miniScreen.textContent += "0."
        } else {
            screen.textContent += "."
            miniScreen.textContent += "."
        }
    }
}


/** Checks if the last input is an operator and returns boolean */
function operatorCheck() {
    if (miniScreen.textContent.charAt(miniScreen.textContent.length-2) != "+" && 
        miniScreen.textContent.charAt(miniScreen.textContent.length-2) != "−" && 
        miniScreen.textContent.charAt(miniScreen.textContent.length-2) != "×" && 
        miniScreen.textContent.charAt(miniScreen.textContent.length-2) != "÷") {
        return true
    }
    return false
}


/** Checks display to make sure there is no operator in it and returns boolean */
function operatorInCheck() {
    if (screen.textContent.includes("+") == false && 
        screen.textContent.includes("−") == false && 
        screen.textContent.includes("×") == false &&  
        screen.textContent.includes("÷") == false) {
        return true
    }
    return false
}


/** Prepares numbers to be added */
function add() {
    if (operatorCheck()) {
        if (operation == "") {
            operation = "add"
            storeSetClearDisplay()
            miniScreen.textContent += " + "
            return
        } evaluate()
    }
}


/** Prepares numbers to be subtracted */
function subtract() {
    if (operatorCheck()){
        if (operation == "") {
            operation = "subtract"
            storeSetClearDisplay()
            miniScreen.textContent += " − "
            return
        } evaluate()
    }
}


/** Prepares numbers to be multiplied */
function multiply() {
    if (operatorCheck()) {
        if (operation == "") {
            operation = "multiply"
            storeSetClearDisplay()
            miniScreen.textContent += " × "
            return
        } evaluate()
    }
}


/** Prepares numbers to be divided */
function divide() {
    if (operatorCheck()) {
        if (operation == "") {
            operation = "divide"
            storeSetClearDisplay()
            miniScreen.textContent += " ÷ "
            return
        } evaluate()
    }
}


/** Evaluates the expression by checking which operation was previously called
 *  and performing the operation */
function evaluate() {
    currentNumber = (Number(screen.textContent))
    if (miniScreen.textContent.includes("=") === false && operatorCheck() && operatorInCheck()) {
        switch (operation) {
            case ("add"): 
                screen.textContent = parseFloat((previousNumber + currentNumber).toFixed(8))
                break;
            case ("subtract"):
                screen.textContent = parseFloat((previousNumber - currentNumber).toFixed(8))
                break;
            case ("multiply"):
                screen.textContent = parseFloat((previousNumber * currentNumber).toFixed(8))
                break;
            case ("divide"):
                screen.textContent = parseFloat((previousNumber / currentNumber).toFixed(8))
        }
        operation = ""
        miniScreen.textContent += " = "
        calculated = "off"
    }
}


/** Adds keyboard support */
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