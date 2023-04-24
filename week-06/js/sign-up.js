function emailValidation(email){
    if(emailExpression.test(email)){
        return true;
    }
    return false;
}

email.addEventListener('focus', function(){
    email.classList.remove('red-border');
    email.classList.add('green-border');
    errorText[0].classList.add('none');
})
email.addEventListener('blur', function(e){
    if (!emailValidation(e.target.value)){
        email.classList.add('red-border');
        email.classList.remove('green-border');
        errorText[0].classList.remove('none');
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
        errorText[1].classList.remove('none');
    }
})

password.addEventListener('focus', function(){
    password.classList.add('green-border');
    password.classList.remove('red-border');
    errorText[1].classList.add('none');
})