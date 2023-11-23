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
export function hideElement(elementId) {
    const element = document.getElementById(elementId);
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
export function revealElement(elementId) {
    const element = document.getElementById(elementId);
    const fadeDuration = 100;

    if (element) {
        element.style.display = 'block'; 
       
        getComputedStyle(element).opacity;

        element.style.transition = `opacity ${fadeDuration}ms ease`;

        element.style.opacity = '1';

        console.log(element + " revealed")
    }

}



console.log("utility.mjs loaded");
