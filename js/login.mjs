import * as utility from './utility.mjs';


// import { showLoading, hideLoading } from "./utility.js";

// showLoading();

// setTimeout(() => {
//     hideLoading();
// }, 2000);


document.addEventListener('DOMContentLoaded', () => {
    const btnShowCreateUser = document.getElementById('btn-show-createUser');
    const btnShowLogin = document.getElementById('btn-show-login');
    const formCreateUser = document.getElementById('create-user-form');

    formCreateUser.style.display = "none";
    

    btnShowCreateUser.addEventListener('click', () => {
        utility.hideElement('login-form');
        utility.revealElement('create-user-form');
    });

    btnShowLogin.addEventListener('click', () => {
        utility.hideElement('create-user-form');
        utility.revealElement('login-form');
    });
});






console.log("index.mjs loaded")
