## Form Validator 

![formValidator](https://github.com/mock3ng/Frontend-Challenge/blob/Form-Validator/form-validator.png)

This JavaScript code is written to validate an example user registration form. The code uses four inputs defined in the HTML form (username, email, password, and repassword) to check the data accuracy of the user before successfully submitting the form.

The code includes two functions named "error" and "success". The "error" function marks the input with a red frame and displays a message next to it. The "success" function marks the input with a green frame. These markings are used to show the user whether the input is correct or incorrect.

The code also includes four more functions named "validateEmail", "checkRequired", "checkLength", and "checkPassword". The "validateEmail" function verifies the email input and checks whether it is a valid email address. The "checkRequired" function checks whether all required inputs are filled or not. The "checkLength" function checks whether the inputs are of specific lengths. The "checkPassword" function checks whether two passwords are the same.

Finally, the code adds a listener to the "submit" event of the form and calls the validation functions before the user submits the form. If the validation process fails, error messages are displayed before submitting the form, and the user is asked to fill in the inputs correctly.
