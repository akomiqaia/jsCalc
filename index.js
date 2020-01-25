let currentNumber = document.querySelector(".current-number")
let wholeFormula = document.querySelector(".whole-formula")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operators")
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')
// clear function to delete the typed number
      // double click to start all over again
clear.addEventListener('click', () => {
  currentNumber.innerText = ""
} )

clear.addEventListener('dblclick', () => {
  wholeFormula.innerText = ""
})

// function displayNumber()
numbers.forEach(number => {
  number.addEventListener('click', () => {

    // don't not allow a number to begin with multiple zeros.
    if(currentNumber.innerText.startsWith("0") && number.innerText === "0") {
      currentNumber.innerText = "0"
      return
    }

    // if equal pressed and user is trying to yype a new number clear everything
    if (wholeFormula.innerText.toString().includes("=")) {
      wholeFormula.innerText = ""
      currentNumber.innerText = ""
    }

    // When the decimal element is clicked, a dot should append to the currently displayed value;
    //  two dots in one number should not be accepted.
    if (number.innerText === "." && currentNumber.innerText.toString().includes(".")) return

    currentNumber.innerText += number.innerText
  })
})

// function displayWholeFormula()
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    

    if (wholeFormula.innerText.toString().includes("=")) {
      wholeFormula.innerText = ` ${currentNumber.innerText} ${operator.innerText}`
      currentNumber.innerText = ""
      return
    }
    wholeFormula.innerText += ` ${currentNumber.innerText} ${operator.innerText}`
    currentNumber.innerText = ""
  })
})
// funtion equals()
equals.addEventListener('click', () => {
  wholeFormula.innerText += currentNumber.innerText
  currentNumber.innerText = eval(wholeFormula.innerText).toFixed(4)
  wholeFormula.innerText += ` ${equals.innerText} ${currentNumber.innerText}`
})



