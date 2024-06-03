import * as utility from './utility.mjs';

// Function to check if the user is logged in
export function isLoggedIn() {
    return sessionStorage.getItem('loginData') !== null || localStorage.getItem('loginData') !== null;
}

// Function to update the burger menu content based on login status
export function updateBurgerMenu(loggedIn) {
    console.log("Updating menu");
    const burgerMenu = document.getElementById('burger-menu');
    burgerMenu.innerHTML = '';

    const logo = document.createElement('img');
    logo.src = '../assets/images/logo - full.png';
    logo.alt = 'Auction Home Logo';
    logo.className = 'img-fluid w-25';
    burgerMenu.appendChild(logo);

    const navList = document.createElement('ul');
    navList.className = 'nav flex-column';

    if (loggedIn) {
        const welcomeMessage = document.createElement('h3');
        welcomeMessage.innerText = 'Welcome back!';
        burgerMenu.appendChild(welcomeMessage);

        const profileLink = document.createElement('li');
        profileLink.className = 'nav-item';
        profileLink.innerHTML = '<a class="btn btn-primary w-100" href="profile.html">View Profile</a>';
        navList.appendChild(profileLink);

        const listingsLink = document.createElement('li');
        listingsLink.className = 'nav-item';
        listingsLink.innerHTML = '<a class="btn btn-primary w-100" href="listings.html">Your Listings</a>';
        navList.appendChild(listingsLink);

        const bidsLink = document.createElement('li');
        bidsLink.className = 'nav-item';
        bidsLink.innerHTML = '<a class="btn btn-primary w-100" href="bids.html">Your Bids</a>';
        navList.appendChild(bidsLink);

        const logoutButton = document.createElement('li');
        logoutButton.className = 'nav-item';
        logoutButton.innerHTML = '<button class="btn btn-secondary w-100">Logout</button>';
        logoutButton.addEventListener('click', () => {
            sessionStorage.removeItem('loginData');
            localStorage.removeItem('loginData');
            window.location.href = '../index.html';
        });
        navList.appendChild(logoutButton);
    } else {
        const loginMessage = document.createElement('h3');
        loginMessage.innerText = 'Please sign in';
        burgerMenu.appendChild(loginMessage);

        const loginLink = document.createElement('li');
        loginLink.className = 'nav-item';
        loginLink.innerHTML = '<a class="btn btn-primary w-100" href="../index.html">Sign in</a>';
        navList.appendChild(loginLink);
    }

    burgerMenu.appendChild(navList);
}

console.log("navigation.mjs loaded");
