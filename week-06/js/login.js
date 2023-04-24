window.onload = function(){

var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var email = document.querySelector('input[name="email"]')

var password = document.querySelector('input[name="password"]');

var errorPassword = document.getElementById('error-password');

var errorEmail = document.getElementById('error-email');

var formError = document.getElementById('form-error');

var formSuccess = document.getElementById('form-success');

var submit = document.querySelector('input[type="submit"]');

submit.addEventListener('click', function(e){
    e.preventDefault();
    if(passwordValidation(password.value) && emailValidation(email.value)){
        formSuccess.classList.remove('none');
        formError.classList.add('none');
        alert('Email:' + email.value + '\nPassword:' + password.value);
    } else{
        formError.classList.remove('none');
        formSuccess.classList.add('none');
        alert('Error: Invalid email or password!');
    }
})

function emailValidation(email){
    if(emailExpression.test(email)){
        return true;
    }
    return false;
}

email.addEventListener('focus', function(){
    email.classList.remove('red-border');
    email.classList.add('green-border');
    errorEmail.classList.add('none');
})
email.addEventListener('blur', function(e){
    if (!emailValidation(e.target.value)){
        email.classList.add('red-border');
        email.classList.remove('green-border');
        errorEmail.classList.remove('none');
    }
})

function numberValidation(n){
    for (var i = 0; i < 10; i++){
        if (i == n){
            return true;
        }
    }
    return false;
}

function letterValidation(a) {
    if (typeof a !== 'string') {
      return false;
    }
    return a.toLowerCase() !== a.toUpperCase();
  }

function passwordValidation(p){
    if (p.length > 8){
        for (var i = 0; i < p.length; i++){
            if (!(numberValidation(p[i]) || letterValidation(p[i]))){
                return false;
            }
        }
        return true;
    }
    return false;
}

password.addEventListener('blur', function(e){
    if (!passwordValidation(e.target.value)){
        password.classList.add('red-border')
        password.classList.remove('green-border');
        errorPassword.classList.remove('none');
    }
})

password.addEventListener('focus', function(){
    password.classList.add('green-border');
    password.classList.remove('red-border');
    errorPassword.classList.add('none');
})

}