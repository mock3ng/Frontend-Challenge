## Cinema Ticket Reservation Application

## It is a uniquely designed cinema ticket application that shows the total price you can buy tickets for movies.

![cinema-ticket](https://github.com/mock3ng/Frontend-Challenge/blob/Cinema-Reservation-App/cinema.png)

Selects the HTML elements with class 'container', 'count', 'amount', and 'movie', and all the elements with class 'seat' that do not have the class 'reserved'.
Calls two functions, 'getFromLocalStorage()' and 'calculateTotal()'.
Adds an event listener to the 'container' element that listens for a 'click' event on any element with the class 'seat' that does not have the class 'reserved'. When such an element is clicked, it toggles the 'selected' class of the element and calls the 'calculateTotal()' function.
Adds an event listener to the 'select' element that listens for a 'change' event. When the user selects a different movie, it calls the 'calculateTotal()' function.
Defines the 'calculateTotal()' function that does the following:
Selects all the elements with the class 'seat' that have the class 'selected'.
Creates an empty array called 'selectedSeatsArr' and another empty array called 'seatsArr'.
Loops through all the selected seats and pushes each seat into the 'selectedSeatsArr' array.
Loops through all the seats (including reserved seats) and pushes each seat into the 'seatsArr' array.
Maps the 'selectedSeatsArr' array to an array of the indexes of the selected seats in the 'seatsArr' array and stores it in the 'selectedSeatsIndexs' variable.
Calculates the number of selected seats and stores it in the 'selectedSeatCount' variable.
Updates the 'count' and 'amount' HTML elements with the number of selected seats and the total price (based on the selected movie), respectively.
Calls the 'saveToLocalStorage()' function with the 'selectedSeatsIndexs' variable as an argument.
Defines the 'getFromLocalStorage()' function that does the following:
Retrieves the 'selectedSeats' array from the local storage and parses it as a JSON object.
If the 'selectedSeats' array is not null and has a length greater than 0, loops through all the seats and adds the 'selected' class to the seats whose indexes are in the 'selectedSeats' array.
Retrieves the 'selectedMovieIndex' from the local storage.
If the 'selectedMovieIndex' is not null, sets the 'selectedIndex' property of the 'select' element to the value of the 'selectedMovieIndex' variable.
Defines the 'saveToLocalStorage()' function that takes an 'index' argument and does the following:
Stores the 'index' array as a JSON object with the key 'selectedSeats' in the local storage.
Stores the 'selectedIndex' property of the 'select' element with the key 'selectedMovieIndex' in the local storage
