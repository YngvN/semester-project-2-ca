import { createURL } from "./api.mjs";
import { checkToken } from "./tokenCheck.mjs"
import * as utility from './utility.mjs';
import { buildTile } from "./tile-display.mjs";

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('btn-hamburger').addEventListener('click', function() {
        utility.toggleHamburgerMenu();
    });

    document.getElementById('btn-exit').addEventListener('click', function() {
        const  modal = document.getElementById('modal-create-listing');
        utility.hideElement(modal);
    });

    document.getElementById('btn-create-listing').addEventListener('click', function() {
        const  modal = document.getElementById('modal-create-listing');
        utility.revealElement(modal);
    });




});

async function displayUserInfo() {
    let loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
    let loginData;

    try {
        loginData = JSON.parse(loginDataString);
    } catch (error) {
        console.error('Error parsing loginData:', error);
        return;
    }

    let response = await createURL('profiles', loginData.name);

    let userData = response;

    if (userData.avatar) {
        document.getElementById('user-info-avatar').src = userData.avatar;
    } else {
        document.getElementById('user-info-avatar').src = "../assets/images/img-profile-placeholder.png";
    }

    document.getElementById('user-info-avatar').textContent = `Welcome ${userData.name}`;
    document.getElementById('user-info-username').textContent = `Welcome ${userData.name}`;
    document.getElementById('user-info-credits').textContent = userData.credits;
}

async function displayListings() {
    let response = await createURL('listings', '', '', '', '', '&_seller=true&_bids=true');

    response.sort((a, b) => b._count.bids - a._count.bids);

    let topListings = response.slice(0, 5);

    document.querySelector('.image-gallery').innerHTML = '';

    for (const listing of topListings) {
        let listingHtml = await buildTile(listing);
        document.getElementById('listing-display-1').innerHTML += listingHtml;
    }
}


// async function displayListings() {
//     let response = await createURL('listings', );

//     // Sort the listings based on the number of bids in descending order
//     response.sort((a, b) => b._count.bids - a._count.bids);

//     // Get only the top 5 listings
//     let topListings = response.slice(0, 5);

//     // Clear the existing content in the image gallery
//     document.querySelector('.image-gallery').innerHTML = '';

//     // Loop through the top 5 listings and append them to your HTML
//     for (const listing of topListings) {
//         console.log('Building ' + listing.id);

//         // Await the resolution of buildTile to get the HTML string
//         let listingHtml = await buildTile(listing.id);

//         document.querySelector('.image-gallery').innerHTML += listingHtml;
//     }
// }



displayUserInfo();
displayListings();




// checkToken ();





// await callProfile("", "").then(data => console.log(data));

console.log("index.mjs loaded")

