## HANGMAN GAME


![hangmangame-img]()



This is a JavaScript code for a hangman game. Here is a brief explanation of what this code does:

The code defines several variables and constants at the beginning, which are used later in the code. These include references to various HTML elements such as the word display, popup container, success message, and wrong letters display.
The code also defines two arrays, correctLetters and wrongLetters, which store the correct and wrong letters guessed by the player, respectively.
The getRandomWord() function selects a random word from an array of words (words) and returns it.
The playAgain event listener resets the correctLetters and wrongLetters arrays, selects a new random word, displays the new word, and updates the wrong letters display. It also hides the popup container.
The displayWord() function displays the selected word on the screen as a series of empty boxes (one for each letter in the word) that will be filled in with the correct letters as they are guessed by the player. It also checks if the player has guessed all the letters correctly and displays a popup message if so.
The window event listener listens for keydown events and checks if the pressed key is a letter (A-Z). If it is, it checks if the letter is part of the selected word. If it is, it adds the letter to the correctLetters array and updates the word display. If it isn't, it adds the letter to the wrongLetters array and updates the wrong letters display.
The updateWrongLetters() function updates the wrong letters display with the letters that have been guessed incorrectly so far. It also updates the hangman display (a series of hanging man images) based on how many wrong letters have been guessed. If the player has guessed all the wrong letters, it displays a popup message saying the game is over.
