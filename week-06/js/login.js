window.onload = function(){
    console.log('ajhsdjhags')

var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

var email = document.querySelector('input[name="email"]')

email.addEventListener('blur', function(event){
    console.log('blur', event.target.value)
    if (!emailExpression.test(event.target.value)){
        alert('Wrong email address')
    }
})

var inputPassword = document.querySelector('input[name="password"]')

function validatePassword(){
    if (inputPassword == ""){
        loginError.removeAttribute('display', 'none')
        document.getElementById('error-text').innerHTML = "**Fill the password please!"
        return false
    }else{
        alert('asdkfjasdlkfjldkalsall')
    }
}

}
