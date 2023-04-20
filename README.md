## HANGMAN GAME 

![hangmanGame](https://github.com/mock3ng/Frontend-Challenge/blob/Hangman-Game/hangman%20game.png)

The first few lines define constants and variables that will be used throughout the code, including references to HTML elements on the page.

The getRandomWord function selects a random word from an array of three possible words ("javascript", "java", or "python").

The playAgain event listener waits for the user to click the "Play Again" button, and then resets the game by clearing the arrays for correct and wrong letters, selecting a new random word, and updating the display accordingly.

The displayWord function updates the display to show the current state of the word being guessed. It uses the selectedWord variable, splits it into an array of letters, and maps over each letter to create a <div> element for it. If the letter has been correctly guessed (i.e., is included in the correctLetters array), it is displayed in the <div>, otherwise the <div> is left blank. The resulting HTML is then inserted into the word_el element.

The window event listener waits for the user to press a key. If the key is a letter between A and Z (represented by key codes 65-90), it checks whether the letter is in the selected word. If it is, and if the letter has not already been guessed correctly, it adds the letter to the correctLetters array and updates the display. If it is not in the word, and if it has not already been guessed incorrectly, it adds the letter to the wrongLetters array and updates the display.

The updateWrongLetters function updates the display of the wrong letters that have been guessed. It creates an HTML string that includes a header ("Wrong Letters") if there are any wrong letters, and a series of <span> elements for each wrong letter. It then inserts this HTML into the wrongLetters_el element. It also updates the display of the "hangman" figure by showing or hiding elements based on the number of wrong guesses. Finally, if the number of wrong guesses is equal to the number of elements in the figure, it displays a "Game Over" message.

The displayWord function is called at the end of the code to initialize the display with the selected word.


