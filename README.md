## COURSE APP WİTH ES5 and ES6 (CSS , HTML , JAVASCRİPT)


![courseApp](https://github.com/mock3ng/Frontend-Challenge/blob/Course-App/Ekran%20g%C3%B6r%C3%BCnt%C3%BCs%C3%BC%202023-04-22%20183745.png)


The first class is "Course" and it contains a constructor function that takes three parameters: title, instructor, and image. This class is used to create a new course object with a unique courseId generated by a random number.

The second class is "UI" and it contains several methods that handle the UI elements and events. The "addCourseToList" method takes a course object and adds it to the course list displayed on the web page. The "clearControls" method clears the input fields of the form. The "deletecourse" method deletes a course from the course list and shows an alert message. The "showAlert" method displays an alert message on the web page.

The third class is "Storage" and it contains methods to access and manipulate the data stored in the browser's local storage. The "getCourses" method retrieves all the courses from the local storage. The "displayCourses" method displays all the courses on the web page. The "addCourse" method adds a new course to the local storage. The "deleteCourse" method deletes a course from the local storage.

The "DOMContentLoaded" event listener calls the "displayCourses" method when the web page is loaded.

The "new-course" event listener listens for the submit event of the form and creates a new course object. If the input fields are empty, it shows a warning message. Otherwise, it adds the course to the course list, saves it to the local storage, clears the input fields, and shows a success message.

The "course-list" event listener listens for the click event of the delete button and calls the "deletecourse" method to delete the selected course.
