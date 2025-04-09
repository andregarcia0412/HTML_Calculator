var elemTxtCalc = document.querySelector("h1")
const elemButtonAC = document.getElementById("ac")
const elemButtonSignal = document.getElementById("+/-")
const elemButtonPercent = document.getElementById("%")

const elemButton1 = document.getElementById("1")
const elemButton2 = document.getElementById("2")
const elemButton3 = document.getElementById("3")
const elemButton4 = document.getElementById("4")
const elemButton5 = document.getElementById("5")
const elemButton6 = document.getElementById("6")
const elemButton7 = document.getElementById("7")
const elemButton8 = document.getElementById("8")
const elemButton9 = document.getElementById("9")
const elemButton0 = document.getElementById("zero")
const elemButtonComma = document.getElementById("comma")

const elemButtonEquals = document.getElementById("=")
const elemButtonSum = document.getElementById("+")
const elemButtonMinus = document.getElementById("-")
const elemButtonTimes = document.getElementById("X")
const elemButtonDivides = document.getElementById("/")

var num1 = null
var num2 = null
var operation = 0

elemButton1.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "1"
})

elemButton2.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "2"
})

elemButton3.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "3"
})

elemButton4.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "4"
})

elemButton5.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "5"
})

elemButton6.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "6"
})

elemButton7.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "7"
})

elemButton8.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "8"
})

elemButton9.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "9"
})

elemButton0.addEventListener("click", function(){
    if(elemTxtCalc.textContent == 0){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "0"
})

elemButtonAC.addEventListener("click", function(){
    elemTxtCalc.textContent = "0"
})

elemButtonSum.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent += " + "
    operation = 1
})

elemButtonMinus.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent += " - "
    operation = 2
})

elemButtonTimes.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent += " X "
    operation = 3
})

elemButtonDivides.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent += " ÷ "
    operation = 4
})

elemButtonSignal.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent = - num1
})

elemButtonPercent.addEventListener("click", function(){
    num1 = Number(elemTxtCalc.textContent)
    elemTxtCalc.textContent = num1 / 100
})

elemButtonComma.addEventListener("click", function(){
    elemTxtCalc.textContent += "."
})

elemButtonEquals.addEventListener("click", function(){
    num2 = Number(elemTxtCalc.textContent.split(" ")[2])

    if(operation == 1){
        elemTxtCalc.textContent = num1 + num2
    } 
    else if(operation == 2){
        elemTxtCalc.textContent = num1 - num2
    } 
    else if(operation == 3){
        elemTxtCalc.textContent = num1 * num2
    }
    else if(operation == 4){
        elemTxtCalc.textContent = num1 / num2
    }
})
