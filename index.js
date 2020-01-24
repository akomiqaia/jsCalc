let currentNumber = document.querySelector(".current-number")
let wholeFormula = document.querySelector(".whole-formula")
let numbers = document.querySelectorAll(".number")
let operators = document.querySelectorAll(".operators")

// functions needed 
  // clear function to delete the typed number
        // double click to start all over again
  // function displayNumber()

  numbers.forEach(number => {
    number.addEventListener('click', () => {
      if (number.innerText === "." && currentNumber.innerText.toString().includes(".")) return
      currentNumber.innerText += number.innerText
    })
  })
  // function displayWholeFormula()

  // function operation
      // if operator is pressed the current number display has to clear out
      
      operators.forEach(operator => {
        operator.addEventListener('click', () => {
          console.log(operator.innerText)
        })
      })
  // funtion equals()




console.log(currentNumber)