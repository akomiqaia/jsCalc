let currentNumber = document.querySelector(".current-number")
let wholeFormula = document.querySelector(".whole-formula")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operators")
let clear = document.getElementById('clear')
let equals = document.getElementById('equals')
let history = document.getElementById('history')

// clear function to delete the typed number
      // double click to clear everything
clear.addEventListener('click', () => {
  currentNumber.innerText = ""
} )

clear.addEventListener('dblclick', () => {
  wholeFormula.innerText = ""
})

// handle numbers and decimal element
numbers.forEach(number => {
  number.addEventListener('click', () => {

    // don't not allow a number to begin with multiple zeros.
    if(currentNumber.innerText.startsWith("0") && number.innerText === "0") {
      currentNumber.innerText = "0"
      return
    }

    // if equal pressed and user is trying to type a new number clear everything
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

let endsWithOperator = /[\/\*\+\-]$/
let endsWithMinus = /[\/\*\+\-]-$/

// handle operators
operators.forEach(operator => {
  operator.addEventListener('click', () => {
    // If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign).
    if (currentNumber.innerText == "") {

      if(endsWithMinus.test(wholeFormula.innerText)) {
        wholeFormula.innerText = wholeFormula.innerText.slice(0, -2) + operator.innerText
        return
      }
      if(endsWithOperator.test(wholeFormula.innerText)) {
        if (operator.innerText == '-') {
          wholeFormula.innerText += '-'
        }
        wholeFormula.innerText = wholeFormula.innerText.slice(0, -1) + operator.innerText
        return
      }
    }
    
    if (wholeFormula.innerText.toString().includes("=")) {
      wholeFormula.innerText = `${currentNumber.innerText}${operator.innerText}`
      currentNumber.innerText = ""
      return
    }
    updateDisplay(currentNumber, wholeFormula, operator)
  })
})

// handle equals
equals.addEventListener('click', () => {
  if (wholeFormula.innerText.toString().includes("=")) {
    // if equal button is clicked twice it repeats the previous operation
    let equalIndex = wholeFormula.innerText.indexOf("=") 
    let previousOperation = wholeFormula.innerText.slice(equalIndex-2, equalIndex)
    let result = wholeFormula.innerText.slice(equalIndex+1)
    wholeFormula.innerText = result + previousOperation
    evaluate(currentNumber, wholeFormula, equals)
    sendToHistory(wholeFormula)
    return
  } 
  wholeFormula.innerText += currentNumber.innerText
  evaluate(currentNumber, wholeFormula, equals)
  sendToHistory(wholeFormula)
})


function updateDisplay(c,w,o) {
  w.innerText += `${c.innerText}${o.innerText}`
  c.innerText = ""
}

function evaluate(c, w, e) {
  // calculate the value and if it's long float number just torund it to 4 decimal number
  c.innerText = +eval(w.innerText).toFixed(4)
  w.innerText += `${e.innerText}${c.innerText}`
}

function sendToHistory(w) {
  // grab the whole formula
  // extract the text and send to div with id of "history" by creating new h2 element
  let textNode = document.createElement("h2")
  let formulaText = document.createTextNode(w.innerText.toString())
  textNode.classList.add("history-item")
  textNode.appendChild(formulaText)
  history.appendChild(textNode)
  // add event listener to each history log so in case of clicking on the log user can return back
  textNode.addEventListener('click', () => {
    w.innerText = textNode.innerText
    currentNumber.innerText = ""
  })
}