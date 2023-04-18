## CALCULATOR APP

![calculator-img](https://github.com/mock3ng/Frontend-Challenge/blob/Calculator-App/calculator.png)

This code is a JavaScript program that implements a calculator application. The application uses an input box named "calculator-input" and a button group named "calculator-keys" within an HTML file.

The code allows the user to perform calculations using the application. As the user enters numbers and operators, the inputs are processed by the application and the result is displayed in the input box.

At the beginning of the code, the "display" and "keys" variables are defined, and the "displayValue", "firstValue", "operator", and "waitingForSecondValue" variables are initialized. These variables are used to keep track of the state of the calculator.

The "updateDisplay" function updates the value displayed in the input box.

The "keys" event listener listens for clicks on the calculator buttons. When a button is clicked, the event target is checked to determine which button was clicked. Depending on the button clicked, the appropriate function is called to handle the input. If an operator button is clicked, the "handleOperate" function is called to handle the operator input. If a decimal button is clicked, the "inputDecimal" function is called to handle the decimal input. If a clear button is clicked, the "clear" function is called to clear the input box.

The "handleOperate" function performs the calculation when an operator button is clicked. It checks the state of the calculator to determine whether the calculation should continue from a previous calculation or start a new one. It then calls the "calculate" function to perform the calculation and updates the state of the calculator.

The "inputNumber" function handles number inputs from the user. If the calculator is waiting for a second value, it replaces the current display value with the new number. Otherwise, it appends the new number to the current display value.

The "inputDecimal" function handles decimal inputs from the user. It checks if the current display value already includes a decimal point and appends a decimal point if not.

The "clear" function resets the display value to "0".

The "calculate" function performs the actual calculation based on the operator selected by the user. It returns the result of the calculation.
