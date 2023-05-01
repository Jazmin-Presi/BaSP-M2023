window.onload = function(){

    var dinDan = document.getElementById('din-dan');
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
        var url = 'https://api-rest-server.vercel.app/signup?' +
        'name=' + name.value +
        '&lastName=' + surname.value +
        '&dni=' + dni.value +
        '&dob=' + birthDate.value +
        '&phone=' + phoneNumber.value +
        '&address=' + address.value +
        '&city=' + city.value +
        '&zip=' + postalCode.value +
        '&email=' + email.value +
        '&password=' + password.value;

        e.preventDefault();
        if(emailValidation(email.value) &&
        passwordValidation(password.value) &&
        password2Validation(rePassword.value, password.value) &&
        nameValidation(name.value) &&
        nameValidation(surname.value) &&
        dniValidation(dni.value) &&
        phoneValidation(phoneNumber.value) &&
        zipValidation(postalCode.value) &&
        cityValidation(city.value) &&
        addressValidation(address.value) &&
        dateValidation(birthDate.value)){
            formSuccess.classList.remove('none');
            formError.classList.add('none');
            dinDan.classList.remove('none');
            fetch(url)
                .then(function(response){
                    return response.json();
                })
                .then(function(response){
                    if(!response.success){throw new Error(JSON.stringify(response))}
                    alert(JSON.stringify(response));
                    alert('Email: ' + email.value +
                        '\nPassword: ' + password.value +
                        '\nRepeat Password: ' + rePassword.value +
                        '\nName: ' + name.value +
                        '\nSurname: ' + surname.value +
                        '\nDNI: ' + dni.value +
                        '\nPhone Number: ' + phoneNumber.value +
                        '\nPostal Code: ' + postalCode.value +
                        '\nCity: ' + city.value +
                        '\nAddress: ' + address.value +
                        '\nBirth Date: ' + birthDate.value);
                })
                .catch(function(error){
                    alert(error);
                })
            } else{
                formError.classList.remove('none');
                formSuccess.classList.add('none');
                dinDan.classList.add('none');
                alert(fieldsValidation(email.value, password.value, rePassword.value, name.value, surname.value,
                    dni.value, phoneNumber.value, postalCode.value, city.value, address.value, birthDate.value))
            }
        })

    function fieldsValidation(e, pw, pw2, n, s, dni, p, z, c, a, d){
        var array = [];
        if(!emailValidation(e)){
            array.push('\nInvalid Email: ' + e);
        }
        if(!passwordValidation(pw)){
            array.push('\nInvalid Password: ' + pw);
        }
        if(!password2Validation(pw2)){
            array.push('\nInvalid Repeat Password: ' + pw2);
        }
        if(!nameValidation(n)){
            array.push('Invalid Name: ' + n);
        }
        if(!nameValidation(s)){
            array.push('\nInvalid Surname: ' + s);
        }
        if(!dniValidation(dni)){
            array.push('\nInvalid DNI: ' + dni);
        }
        if(!phoneValidation(p)){
            array.push('\nInvalid Phone number: ' + p);
        }
        if(!zipValidation(z)){
            array.push('\nInvalid Postal Code: ' + z);
        }
        if(!cityValidation(c)){
            array.push('\nInvalid City: ' + c);
        }
        if(!addressValidation(a)){
            array.push('\nInvalid Address: ' + a);
        }
        if(!dateValidation(d)){
            array.push('\nInvalid Birth Date: ' + d);
        }
        return array;
    }

    function letterValidation(a) {
        if (typeof a !== 'string'){
            return false;
        }
        return a.toLowerCase() !== a.toUpperCase();
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

    function emailValidation(email){
        if(emailExpression.test(email)){
            return true;
        }
        return false;
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

    function password2Validation(pw1, pw2){
        if(pw1 === pw2){
            return true;
        }
        return false;
    }

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

    function dniValidation(d){
        if (d.length > 7){
            for (var i = 0; i < d.length; i++){
                if (!(numberValidation(d[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function phoneValidation(p){
        if (p.length == 10){
            for (var i = 0; i < p.length; i++){
                if (!(numberValidation(p[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

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

    function cityValidation(c){
        if (c.length > 3){
            for (var i = 0; i < c.length; i++){
                if (!(numberValidation(c[i]) || letterValidation(c[i]))){
                    return false;
                }
            } return true;
        }
        return false;
    }

    function addressValidation(a){
        if (a.length >= 5){
            var num = false;
            var char = false;
            var space = false;
            for (var i = 0; i < a.length; i++){
                if (!(numberValidation(a[i]) || letterValidation(a[i]) || a[i] == ' ')){
                    return false;
                }
                if(numberValidation(a[i])){
                    num = true;
                }else if(letterValidation(a[i])){
                    char = true;
                } else{
                    space = true;
                }
            }
            if(num && char && space){
                return true;
            }
        }
        return false;
    }


    function dateValidation(d){
        var date = new Date(d);
        var currentDate = new Date();
        if (date.getTime() <= currentDate.getTime()) {
        return true;
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
            password.classList.add('red-border');
            password.classList.remove('green-border');
            errorPassword.classList.remove('none');
        }
    })

    password.addEventListener('focus', function(){
        password.classList.add('green-border');
        password.classList.remove('red-border');
        errorPassword.classList.add('none');
    })

    rePassword.addEventListener('blur', function(e){
        if (!password2Validation(e.target.value, password.value)){
            rePassword.classList.add('red-border');
            rePassword.classList.remove('green-border');
            errorRePassword.classList.remove('none');
        }
    })

    rePassword.addEventListener('focus', function(){
        rePassword.classList.add('green-border');
        rePassword.classList.remove('red-border');
        errorRePassword.classList.add('none');
    })

    name.addEventListener('blur', function(e){
        if (!nameValidation(e.target.value)){
            name.classList.add('red-border');
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
            surname.classList.add('red-border');
            surname.classList.remove('green-border');
            errorSurname.classList.remove('none');
        }
    })

    surname.addEventListener('focus', function(){
        surname.classList.add('green-border');
        surname.classList.remove('red-border');
        errorSurname.classList.add('none');
    })

    dni.addEventListener('blur', function(e){
        if (!dniValidation(e.target.value)){
            dni.classList.add('red-border');
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
        if (!dateValidation(e.target.value)){
            birthDate.classList.add('red-border');
            birthDate.classList.remove('green-border');
            errorBirthDate.classList.remove('none');
        }
    })

    birthDate.addEventListener('focus', function(){
        birthDate.classList.add('green-border');
        birthDate.classList.remove('red-border');
        errorBirthDate.classList.add('none');
    })

    phoneNumber.addEventListener('blur', function(e){
        if (!phoneValidation(e.target.value)){
            phoneNumber.classList.add('red-border');
            phoneNumber.classList.remove('green-border');
            errorPhoneNumber.classList.remove('none');
        }
    })

    phoneNumber.addEventListener('focus', function(){
        phoneNumber.classList.add('green-border');
        phoneNumber.classList.remove('red-border');
        errorPhoneNumber.classList.add('none');
    })

    address.addEventListener('blur', function(e){
        if (!addressValidation(e.target.value)){
            address.classList.add('red-border');
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
        if (!cityValidation(e.target.value)){
            city.classList.add('red-border');
            city.classList.remove('green-border');
            errorCity.classList.remove('none');
        }
    })

    city.addEventListener('focus', function(){
        city.classList.add('green-border');
        city.classList.remove('red-border');
        errorCity.classList.add('none');
    })

    postalCode.addEventListener('blur', function(e){
        if (!zipValidation(e.target.value)){
            postalCode.classList.add('red-border');
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