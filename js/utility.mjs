import { updateBurgerMenu, isLoggedIn } from "./navigation.mjs";

/**
 * Hides an element with fade-out effect.
 * @param {string} elementId - The ID of the element to hide.
 */
export function hideElement(elementId) {
    const element = document.getElementById(elementId);
    const fadeDuration = 300;

    if (element) {
        element.style.transition = `opacity ${fadeDuration}ms ease`;
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.display = 'none';
        }, fadeDuration);
        console.log(elementId + " hidden");
    }
}

/**
 * Reveals an element with fade-in effect.
 * @param {string} elementId - The ID of the element to reveal.
 */
export function revealElement(elementId) {
    const element = document.getElementById(elementId);
    const fadeDuration = 300;

    if (element) {
        element.style.display = 'block';
        getComputedStyle(element).opacity; // Trigger reflow
        element.style.transition = `opacity ${fadeDuration}ms ease`;
        element.style.opacity = '1';
        console.log(elementId + " revealed");
    }
}

/**
 * Toggles the hamburger menu.
 */
export function toggleHamburgerMenu() {
    updateBurgerMenu(isLoggedIn());
    try {
        const btnHamburger = document.getElementById('btn-hamburger');
        btnHamburger.classList.toggle('toggle');

        if (btnHamburger.classList.contains('toggle')) {
            revealElement('burger-menu');
        } else {
            hideElement('burger-menu');
        }
    } catch (error) {
        console.error("Error occurred in hamburger menu functionality:", error);
    }
}

/**
 * Checks if a container has the class "toggle" and calls appropriate functions based on the class presence.
 * @param {HTMLElement} id - The element to check for the 'toggle' class.
 * @param {string} elementId - The ID of the element to hide or reveal.
 */
export function checkToggleClass(id, elementId) {
    if (id && id.classList.contains('toggle')) {
        revealElement(elementId);
        console.log("Revealing " + elementId);
    } else {
        hideElement(elementId);
        console.log("Hiding " + elementId);
    }
}

console.log("utility.mjs loaded");

/**
 * Show loading overlay.
 */
// export function showLoading() {
//     const loadingOverlay = document.createElement('div');
//     loadingOverlay.className = 'loading-overlay';
//     const loadingIndicator = document.createElement('div');
//     loadingIndicator.className = 'loading-indicator';
//     loadingOverlay.appendChild(loadingIndicator);
//     document.body.appendChild(loadingOverlay);
// }

/**
 * Hide loading overlay.
 */
// export function hideLoading() {
//     const loadingOverlay = document.querySelector('.loading-overlay');
//     if (loadingOverlay) {
//         document.body.removeChild(loadingOverlay);
//     }
// }

/**
 * Check for dark mode preference and log the result.
 */
// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     console.log("Dark mode");
// }
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
//     const newColorScheme = event.matches ? "dark" : "light";
//     console.log(newColorScheme);
// });