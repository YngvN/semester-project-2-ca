// const loadingOverlay = document.createElement('div');
// loadingOverlay.className = 'loading-overlay';

// const loadingIndicator = document.createElement('div');
// loadingIndicator.className = 'loading-indicator';

// export function showLoading() {
//   loadingOverlay.appendChild(loadingIndicator);
//   document.body.appendChild(loadingOverlay);
// }

// export function hideLoading() {
//   if (loadingOverlay) {
//     document.body.removeChild(loadingOverlay);
//   }
// }

// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//   console.log("Dark mode");
// }
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
//     console.log(newColorScheme);
// });

/**
 * Hides an element with fade-out
 */
export function hideElement(element) {

    const fadeDuration = 100;

    if (element) {

        element.style.transition = `opacity ${fadeDuration}ms ease`;


        element.style.opacity = '0';


        setTimeout(() => {
            element.style.display = 'none';
        }, fadeDuration);

        console.log(element + " hidden")
    }
}

/**
 * Reveals an element with fade-in
 */
export function revealElement(element) {


    const fadeDuration = 100;

    if (element) {
        element.style.display = 'block'; 
       
        getComputedStyle(element).opacity;

        element.style.transition = `opacity ${fadeDuration}ms ease`;

        element.style.opacity = '1';

        console.log(element + " revealed")
    }

}


/**
 * Toggles the hamburgermeny
 */
export function toggleHamburgerMenu() {
    try {
        var btnHamburger = document.getElementById('btn-hamburger');
        btnHamburger.classList.toggle('toggle');
        const hamburgerMenu = document.getElementById('burger-menu');

        if (btnHamburger.classList.contains('toggle')) {
            revealElement(hamburgerMenu);
            console.log("showing hamburger");
        } else {
            hideElement(hamburgerMenu);
            console.log("hiding hamburger");
        }
    } catch (error) {
        console.error("Error occurred in hamburger menu functionality:", error);
    }
}



/**
 * Checks if a container has the class "toggle" and calls appropriate functions based on the class presence.
 * @param {string} id - The ID of the element to check for the 'toggle' class.
 * @param {*} Element - Element to hide or reveal

 */
export function checkToggleClass(id, element) {

    if (id && id.classList.contains('toggle')) {
        revealElement(element);
        console.log("Revealing  " + element);

    } else {
        hideElement(element);
        console.log("Hiding  " + element);
    }
}





console.log("utility.mjs loaded");
