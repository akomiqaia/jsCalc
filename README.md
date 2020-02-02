# JavaScript calculator

**User Story #1:** My calculator contains 10 clickable elements containing one number each from 0-9, 4 clickable elements each containing one of the 4 primary mathematical operators, a clickable element containing a . (decimal point) symbol and a **clear** button


**User Story #2:** My calculator contains an element to display values. The display is divided into two parts. One of them displays the whole mathematical formula user entered and other one displays currently typed number.

**User Story #3:** At any time, pressing the clear button once clears the current input number and double click with clear input and output values, and returns the calculator to its initialized state;

**User Story #4:** User can perform any operation (+, -, *, /) on numbers containing decimal points.

**User Story #5:** If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). 

 For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).

**User Story #6:** Pressing an operator immediately following = starts a new calculation that operates on the result of the previous evaluation.

**User Story #15:** My calculator has 4 decimal places of precision when it comes to rounding
___ 

---

*Note On Calculator Logic:* My calculator utilizes formula logic(opposed to Immediate Execution Logic) and observes order of operation precedence. As long as your math can be verified by another production calculator, please do not consider this a bug.

        EXAMPLE: 3 + 5 x 6 - 2 / 4 =

        Formula/Expression Logic: 32.5
        Immediate Execution Logic: 11.5

[More about the Calculator logic]: https://en.wikipedia.org/wiki/Calculator_input_methods



