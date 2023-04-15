## Automatik and Manuel Slider

![slider](https://github.com/mock3ng/Frontend-Challenge/blob/Slider/slider.png)

This code is a JavaScript program that creates an image slider for a burger menu. The slider has left and right arrow buttons that allow the user to navigate through different burger images and names.

The program begins by defining an array called "models" that contains objects representing different burgers. Each object has a name and a source for the corresponding image file. The program also initializes variables for the number of slides and the current index.

Next, a "settings" object is defined that specifies the duration of each slide and whether the slides should be shown in a random order.

The "interval" function is then defined, which takes the "settings" object as an argument. This function uses the "setInterval" method to repeatedly call a function that updates the slider with the next slide based on the "random" setting. If "random" is set to true, the function will randomly select a slide that is different from the previous slide. Otherwise, the function will simply move to the next slide in order.

The "sliderAtt" function is also defined, which takes the current index as an argument and updates the HTML elements with the corresponding burger name and image.

Finally, event listeners are added to the left and right arrow buttons, which call the "sliderAtt" function with the previous or next index respectively, and clear the interval timer to pause the automatic sliding.
