## Quiz App with Extra Clean Code. (JS,CSS,HTML,BOOTSTRAP)

![quizapp](https://github.com/mock3ng/Frontend-Challenge/blob/Quiz-App/quiz.png)

This is a code written in JavaScript. It defines an object named "ui" and a variable named "countCorrect". The "ui" object represents the user interface of a quiz application.

The code adds event listeners to two buttons, "btnStart" and "nextButton", using the "addEventListener" method. When the "btnStart" button is clicked, it adds the "disable" class to the button to prevent multiple clicks, shows the quiz box, gets the first question from the "quiz" object (which is not shown in this code), displays the question using the "qShow" method of the "ui" object, and updates the question count using the "qCountShow" method of the "ui" object.

When the "nextButton" is clicked, it checks if the current question is not the last question. If it is not the last question, it increases the question index of the "quiz" object, gets the next question, displays it, and updates the question count. If it is the last question, it shows the score box and hides the quiz box using the "showScore" method of the "ui" object.

The code also defines a function named "optionSelected", which takes an option as an argument. It gets the selected answer from the option, gets the current question from the "quiz" object, checks if the answer is correct using the "checkAnswer" method of the question, updates the score if the answer is correct, displays an icon indicating the correctness of the answer, and disables all options using the "disabled" class.
