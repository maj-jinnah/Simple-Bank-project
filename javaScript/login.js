document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-user');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-user');
    const password = passwordField.value;
    
    // if(isNaN(emailField) || isNaN(passwordField) ){
    //     alert('Please, provide Email and Password.')
    //     return;
    // }

    if(email === 'maj.jinnah1999@gmail.com' && password === 'amiFokirVai'){
        location. href = 'bank.html';
    }
    else{
        alert('Incorrect Email or Password!!!')
    }

})