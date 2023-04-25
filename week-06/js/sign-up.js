window.onload = function(){

var submit = document.querySelector('input[type="submit"]');
var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
var email = document.querySelector('input[name="email"]')
var password = document.querySelector('input[name="password"]');
var rePassword = document.querySelector('input[name="re-password"]');
var name = document.querySelector('input[name="name"]');
var surname = document.querySelector('input[name="surname"]');
var dni = document.querySelector('input[name="dni"]');
var birthDate = document.querySelector('input[name="birth-date"]');
var phoneNumber = document.querySelector('input[name="phone-number"]');
var address = document.querySelector('input[name="address"]');
var city = document.querySelector('input[name="city"]');
var postalCode = document.querySelector('input[name="postal-code"]');
var errorEmail = document.getElementById('error-email');
var errorPassword = document.getElementById('error-password');
var errorRePassword = document.getElementById('error-re-password');
var errorName = document.getElementById('error-name');
var errorSurname = document.getElementById('error-surname');
var errorDni = document.getElementById('error-dni');
var errorBirthDate = document.getElementById('error-birth-date');
var errorPhoneNumber = document.getElementById('error-phone-number');
var errorAddress = document.getElementById('error-address');
var errorCity = document.getElementById('error-city');
var errorPostalCode = document.getElementById('error-postal-code');
var formError = document.getElementById('form-error');
var formSuccess = document.getElementById('form-success');
 

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
    
    /* password2 validation */

    function Password2Validation(){
        if(password.value !== rePassword.value){
        }
        return false;
    }

    rePassword.addEventListener('blur', function(e){
        if (!passwordValidation(e.target.value)){
            rePassword.classList.add('red-border')
            rePassword.classList.remove('green-border');
            errorRePassword.classList.remove('none');
        }
    })
    
    rePassword.addEventListener('focus', function(){
        rePassword.classList.add('green-border');
        rePassword.classList.remove('red-border');
        errorRePassword.classList.add('none');
    })

    /* name validation*/

    function nameValidation(n){
        if (n.length >= 3){
            for (var i = 0; i < n.length; i++){
                if (!(letterValidation(n[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    name.addEventListener('blur', function(e){
        if (!nameValidation(e.target.value)){
            name.classList.add('red-border')
            name.classList.remove('green-border');
            errorName.classList.remove('none');
        }
    })
    
    name.addEventListener('focus', function(){
        name.classList.add('green-border');
        name.classList.remove('red-border');
        errorName.classList.add('none');
    })

    surname.addEventListener('blur', function(e){
        if (!nameValidation(e.target.value)){
            surname.classList.add('red-border')
            surname.classList.remove('green-border');
            errorSurname.classList.remove('none');
        }
    })
    
    surname.addEventListener('focus', function(){
        surname.classList.add('green-border');
        surname.classList.remove('red-border');
        errorSurname.classList.add('none');
    })

    /* dni validation*/

    function dniValidation(d){
        if (d.length >= 7){
            for (var i = 0; i < d.length; i++){
                if (!(numberValidation(d[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    dni.addEventListener('blur', function(e){
        if (!dniValidation(e.target.value)){
            dni.classList.add('red-border')
            dni.classList.remove('green-border');
            errorDni.classList.remove('none');
        }
    })
    
    dni.addEventListener('focus', function(){
        dni.classList.add('green-border');
        dni.classList.remove('red-border');
        errorDni.classList.add('none');
    })

    birthDate.addEventListener('blur', function(e){
        if (!passwordValidation(e.target.value)){
            birthDate.classList.add('red-border')
            birthDate.classList.remove('green-border');
            errorBirthDate.classList.remove('none');
        }
    })
    
    birthDate.addEventListener('focus', function(){
        birthDate.classList.add('green-border');
        birthDate.classList.remove('red-border');
        errorBirthDate.classList.add('none');
    })

    /* phone validation*/

    function phoneValidation(p){
        if (p.length >= 10){
            for (var i = 0; i < p.length; i++){
                if (!(numberValidation(p[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    phoneNumber.addEventListener('blur', function(e){
        if (!phoneValidation(e.target.value)){
            phoneNumber.classList.add('red-border')
            phoneNumber.classList.remove('green-border');
            errorPhoneNumber.classList.remove('none');
        }
    })
    
    phoneNumber.addEventListener('focus', function(){
        phoneNumber.classList.add('green-border');
        phoneNumber.classList.remove('red-border');
        errorPhoneNumber.classList.add('none');
    })

    /* adress validation*/

    address.addEventListener('blur', function(e){
        if (!passwordValidation(e.target.value)){
            address.classList.add('red-border')
            address.classList.remove('green-border');
            errorAddress.classList.remove('none');
        }
    })
    
    address.addEventListener('focus', function(){
        address.classList.add('green-border');
        address.classList.remove('red-border');
        errorAddress.classList.add('none');
    })

    city.addEventListener('blur', function(e){
        if (!passwordValidation(e.target.value)){
            city.classList.add('red-border')
            city.classList.remove('green-border');
            errorCity.classList.remove('none');
        }
    })
    
    city.addEventListener('focus', function(){
        city.classList.add('green-border');
        city.classList.remove('red-border');
        errorCity.classList.add('none');
    })

    /* zip validation (me toma espacios) */

    function zipValidation(z){
        if (z.length >= 4 &&  z.length <= 5){
            for (var i = 0; i < z.length; i++){
                if (!(numberValidation(z[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }
    console.log(zipValidation('789 '))
    console.log(zipValidation('7899 '))
    console.log(zipValidation('12345 '))
    console.log(zipValidation('1g23 456'))

    postalCode.addEventListener('blur', function(e){
        if (!passwordValidation(e.target.value)){
            postalCode.classList.add('red-border')
            postalCode.classList.remove('green-border');
            errorPostalCode.classList.remove('none');
        }
    })
    
    postalCode.addEventListener('focus', function(){
        postalCode.classList.add('green-border');
        postalCode.classList.remove('red-border');
        errorPostalCode.classList.add('none');
    })












    }