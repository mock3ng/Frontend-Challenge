const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input) {
    input.className = 'form-control is-valid'
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(re.test(email.value)){
        success(email);
    }else{
        error(email,'is not validate e-mail')
    }
  }

function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value ===''){
            error(input,`${input.id} is required`);
    
        }else{
            success(input);
        }
    });
}

function checkLenght(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} more than ${min} has charecters`);
    }else if (input.value.length>max){
        error(input,`${input.id} less than ${max} has charecters`);
    }else{
        success(input);
    }
}
function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        error(input2,"Passwords are not same");
    }else{
        success(input2);
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
    
    checkRequired([username,email,password,repassword]);
    validateEmail(email);
    checkLenght(username,7,15);
    checkLenght(password,7,12);
    checkPassword(password,repassword); 
});