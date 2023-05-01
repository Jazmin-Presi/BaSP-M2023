window.onload = function(){

    var fine = document.getElementById('fine');
    var dinDan = document.getElementById('din-dan');
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var email = document.querySelector('input[name="email"]')
    var password = document.querySelector('input[name="password"]');
    var errorPassword = document.getElementById('error-password');
    var errorEmail = document.getElementById('error-email');
    var formError = document.getElementById('form-error');
    var formSuccess = document.getElementById('form-success');
    var submit = document.querySelector('input[type="submit"]');


    submit.addEventListener('click', function(e){
        var url = `https://api-rest-server.vercel.app/login?email=${email.value}&password=${password.value}`;
        e.preventDefault();
        if(passwordValidation(password.value) && emailValidation(email.value)){
            formSuccess.classList.remove('none');
            formError.classList.add('none');
            dinDan.classList.remove('none');
            fine.classList.add('none');
            console.log(email.value, password.value)
            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                if(!response.success){throw new Error(JSON.stringify(response))}
                alert(JSON.stringify(response));
                alert('Email: ' + email.value + '\nPassword: ' + password.value);
            })
            .catch(function(error){
                alert(error);
            })
        } else{
            formError.classList.remove('none');
            formSuccess.classList.add('none');
            dinDan.classList.add('none');
            fine.classList.remove('none');
            alert(fieldsValidation(email.value, password.value))
        }
    })

    function fieldsValidation(e, pw){
        var array = [];
        if(!emailValidation(e)){
            array.push('\nInvalid Email: ' + e);
        }
        if(!passwordValidation(pw)){
            array.push('\nInvalid Password: ' + pw);
        }
        return array;
    }

    function emailValidation(email){
        if(emailExpression.test(email)){
            return true;
        }
        return false;
    }

    function numberValidation(n){
        for (var i = 0; i < 10; i++){
            if(n[i] == ' '){
                return false;
            }
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
        if (p.length >= 8){
            var num = false;
            var char = false;
            for (var i = 0; i < p.length; i++){
                if (!(numberValidation(p[i]) || letterValidation(p[i]))){
                    return false;
                }
                if(numberValidation(p[i])){
                    num = true;
                }else{
                    char = true;
                }
            }
            if(num && char){
                return true;
            }
        }
        return false;
    }

    email.addEventListener('blur', function(e){
        if (!emailValidation(e.target.value)){
            email.classList.add('red-border');
            email.classList.remove('green-border');
            errorEmail.classList.remove('none');
        }
    })

    email.addEventListener('focus', function(){
        email.classList.remove('red-border');
        email.classList.add('green-border');
        errorEmail.classList.add('none');
    })

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