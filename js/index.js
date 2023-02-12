// button submit
// 1. add event listener
document.getElementById('btn-submit').addEventListener('click', function(){
    // 2. to get input value
    const email=document.getElementById('user-email');
    const emailField=email.value;

    const password=document.getElementById('user-password');
    const passwordField=password.value;

    // validation
    if(emailField==='jahan@gmail.com' && passwordField==='123'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid User');
    }
   
})