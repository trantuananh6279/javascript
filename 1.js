var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPassword = document.querySelector('#confirm-password');
var form = document.querySelector('form');

function showError(input, message){
    var parent = input.parentElement;
    var small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

function showSuccess(input){
    var parent = input.parentElement;
    var small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

function checkEmptyError(listInput){
    var isEmptyError = false;
    listInput.forEach(input => {
        input.value = input.value.trim();
        if(!input.value){
            isEmptyError = false;
            showError(input, 'Khong được trống');
        }
        else{
            showSuccess(input);
        }
    });
    return isEmptyError;
}

function checkEmailError(input){
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    input.value = input.value.trim();

    var isEmailError = !regexEmail.test(input.value);
    if(regexEmail.test(input.value)){
        showSuccess(input);
    }
    else{
        showError(input, 'Email Invalid');
    }
    return isEmailError;
}

form.addEventListener('submit', function(e){
    e.preventDefault();
    var isEmptyError = checkEmptyError([username, email, password, confirmPassword]);
    var isEmailError = checkEmailError(email);
});