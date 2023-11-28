import { checkToken } from "./tokenCheck.mjs"


// import { showLoading, hideLoading } from "./utility.js";


// showLoading();

// setTimeout(() => {
//     hideLoading();
// }, 2000);

checkToken ();


document.getElementById('btn-hamburger').addEventListener('click', function() {
    this.classList.toggle('toggle');
});

console.log("index.mjs loaded")

