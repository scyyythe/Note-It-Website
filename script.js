
const home = document.getElementById('home');
const form = document.getElementById('form');
const btn_home = document.getElementById('btn_home');
const btn_form = document.getElementById('btn_form');
const btn_register = document.getElementById('btn_register');


function viewHome() {
    home.style.transform = 'translateX(0)';
    form.style.transform = 'translateX(100%)';
}

function viewForm() {
    home.style.transform = 'translateX(100%)'; 
    form.style.transform = 'translateX(-95%)'; 
}

const signInButton = document.getElementById('signInButton');
signInButton.addEventListener('click', viewForm);

btn_home.addEventListener('click', viewHome);
btn_form.addEventListener('click', viewForm);

