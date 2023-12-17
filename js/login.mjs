import * as utility from './utility.mjs';
import { registerUser } from './register.mjs';
import { loginUser } from './register.mjs';

// import { showLoading, hideLoading } from "./utility.js";

// showLoading();

// setTimeout(() => {
//     hideLoading();
// }, 2000);


document.addEventListener('DOMContentLoaded', () => {
    const btnShowCreateUser = document.getElementById('btn-show-createUser');
    const btnShowLogin = document.getElementById('btn-show-login');
    const loginForm = document.getElementById('login-form');
    const createUserForm = document.getElementById('create-user-form');

    createUserForm.style.display = "none";
    

    btnShowCreateUser.addEventListener('click', () => {
        utility.hideElement('login-form');
        utility.revealElement('create-user-form');
    });

    btnShowLogin.addEventListener('click', () => {
        utility.hideElement('create-user-form');
        utility.revealElement('login-form');
    });


    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const rememberMe = document.getElementById('login-checkRemember').checked;

        loginUser(email, password, rememberMe);
    });

    createUserForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
        const name = document.getElementById('inputUsername').value;
        const email = document.getElementById('inputEmail').value;
        const password = document.getElementById('inputPassword').value;
        const repeatPassword = document.getElementById('inputRepeatPassword').value;
        const rememberMe = document.getElementById('checkRemember').checked;


        if (password !== repeatPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        if (!email.endsWith('@stud.noroff.no') && !email.endsWith('@noroff.no')) {
            alert('Email must end with @stud.noroff.no or @noroff.no');
            return;
        }


        registerUser(name, email, password);
        

    });

    const skipLoginLink = document.querySelector('.btn-skipLogin');

    //Needs to be more safe
    skipLoginLink.addEventListener('click', (event) => {
        event.preventDefault();
        sessionStorage.setItem('loggedIn', false);
        window.location.href = "pages/index.html";
    });

console.log("login.mjs loaded");
});






