let previousNumber = ""
let operation = ""

function clearDisplay() {
    document.querySelector('.screen').textContent = ""
    document.querySelector('.mini-screen').textContent = ""
    previousNumber = ""
    currentNumber = ""
    operation = ""

}

function add() {
    if (operation == "") {
        previousNumber = parseInt(document.querySelector(".screen").textContent)
        document.querySelector(".screen").textContent = ""
        document.querySelector(".mini-screen").textContent += "+"
        operation = "add"
    } else {
        operator()
    }
}

function subtract() {
    if (operation == "") {
        previousNumber = parseInt(document.querySelector(".screen").textContent)
        document.querySelector(".screen").textContent = ""
        document.querySelector(".mini-screen").textContent += "-"
        operation = "subtract"
    } else {
        operator()
    }
}

function multiply() {
    if (operation == "") {
        previousNumber = parseInt(document.querySelector(".screen").textContent)
        document.querySelector(".screen").textContent = ""
        document.querySelector(".mini-screen").textContent += "*"
        operation = "multiply"
    } else {
        operator()
    }
}

function divide() {
    if (operation == "") {
        previousNumber = parseInt(document.querySelector(".screen").textContent)
        document.querySelector(".screen").textContent = ""
        document.querySelector(".mini-screen").textContent += "/"
        operation = "divide"
    } else {
        operator()
    }
}

function operator() {
    currentNumber = (parseInt(document.querySelector(".screen").textContent))
    switch (operation) {
        case ("add"): 
            document.querySelector(".screen").textContent = (previousNumber + currentNumber)
            break;
        case ("subtract"):
            document.querySelector(".screen").textContent = (previousNumber - currentNumber)
            break;
        case ("multiply"):
            document.querySelector(".screen").textContent = (previousNumber * currentNumber)
            break;
        case ("divide"):
            document.querySelector(".screen").textContent = (previousNumber / currentNumber)
    }
    operation = ""
    document.querySelector(".mini-screen").textContent = document.querySelector(".screen").textContent
}

