elemTxtCalc = document.querySelector("h1")
elemButtonAC = document.getElementById("ac")
elemButton1 = document.getElementById("1")

elemButton1.addEventListener("click", function(){
    if(elemTxtCalc.textContent.includes("0")){
        elemTxtCalc.textContent = ""
    }
    elemTxtCalc.textContent += "1"
})

elemButtonAC.addEventListener("click", function(){
    elemTxtCalc.textContent = "0"
})