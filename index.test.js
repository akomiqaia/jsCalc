// let currentNumber = document.querySelector(".current-number")
// let wholeFormula = document.querySelector(".whole-formula")
// let numbers = document.querySelectorAll(".number")
// let operators = document.querySelectorAll(".operators")
// let clear = document.getElementById('clear')
// let equals = document.getElementById('equals')
// let history = document.getElementById('history')

console.log(numbers, operators)

const TEST_clear = document.getElementById('clear');
const TEST_equals = document.getElementById('equals');
const TEST_divide = document.getElementById('divide');
const TEST_multiply = document.getElementById('multiply');
const TEST_subtract = document.getElementById('subtract');
const TEST_add = document.getElementById('add');
const TEST_ac = document.getElementById('ac');

const TEST_0 = document.getElementById("zero");
const TEST_1 = document.getElementById("one");
const TEST_2 = document.getElementById("two");
const TEST_3 = document.getElementById("three");
const TEST_4 = document.getElementById("four");
const TEST_5 = document.getElementById("five");
const TEST_6 = document.getElementById("six");
const TEST_7 = document.getElementById("seven");
const TEST_8 = document.getElementById("eight");
const TEST_9 = document.getElementById("nine");
const TEST_DP = document.getElementById("decimal");

test("Entering one displays 1", t => {
  TEST_1.click()
  t.equal(currentNumber.innerText, "1", "You clicked on one")
  currentNumber.innerText = ""
})

test("All the buttons get clicked", t => {
    TEST_1.click()
    TEST_2.click()
    TEST_3.click()
    TEST_4.click()
    TEST_5.click()
    TEST_6.click()
    TEST_7.click()
    TEST_8.click()
    TEST_9.click()
    TEST_0.click()
    TEST_DP.click()
    t.equal(currentNumber.innerText, "1234567890.", "All the keys work!")
    currentNumber.innerText = ""
  })

test("Check addition", t => {
  TEST_2.click()
  TEST_add.click()
  TEST_3.click()
  TEST_equals.click()
  t.equal(wholeFormula.innerText, "2+3=5", "the addition works" )
  wholeFormula.innerText = ""
  currentNumber.innerText = ""
})

test("Check multiply by negative", t => {
    TEST_2.click()
    TEST_multiply.click()
    TEST_subtract.click()
    TEST_3.click()
    TEST_equals.click()
    t.equal(wholeFormula.innerText, "2*-3=-6", "Mult by negative works" )
    wholeFormula.innerText = ""
  })

test("Check if clear works", t => {
  TEST_2.click()
  TEST_clear.click()
  t.equal(currentNumber.innerText, "", "The current number is clear")
})

// Ui is failing this test
test("Check multiple operators aren't allowed", t => {
    TEST_add.click();
    TEST_divide.click();
    TEST_divide.click();
    TEST_subtract.click();
    TEST_multiply.click();
    TEST_subtract.click();
    TEST_1.click();
    TEST_2.click();
    TEST_3.click();
    TEST_add.click();
    TEST_1.click();
    TEST_equals.click();
    t.equal(wholeFormula.innerText, "-123+1=-122", "The current number is clear")
  });
    
test("check if equal button repeats the previous operation", t => {
  TEST_2.click()
  TEST_multiply.click()
  TEST_2.click()
  TEST_equals.click()
  TEST_equals.click()
  TEST_equals.click()
  t.equal(wholeFormula.innerText, "8*2=16", "equal button reeats the previous operation")
})