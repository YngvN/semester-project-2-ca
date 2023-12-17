import * as api from './api.mjs';


/**
 * Builds listing tile
 * @param {object} listingId - The ID of the listing
 */
export async function buildTile(listingObject) {
    if (listingObject.bids && listingObject.bids.length > 0) {
        listingObject.bids.sort((a, b) => a.amount - b.amount);
    }

    // Calculate time left
    const now = new Date();
    const endsAt = new Date(listingObject.endsAt);
    const timeDiff = endsAt - now;
    const hoursLeft = timeDiff / (1000 * 60 * 60);
    const daysLeft = hoursLeft / 24;

    let timeLeftString;
    if (daysLeft >= 1) {
        timeLeftString = `${Math.floor(daysLeft)} days left`;
    } else {
        timeLeftString = `${Math.floor(hoursLeft)} hours left`;
    }

    let latestBidAmount = listingObject.bids.length > 0 ? listingObject.bids[listingObject.bids.length - 1].amount : 'No bids';

    let tileHTML = `
        <button class="listing-tile-preview position-relative box">
                <img id="img-listing-preview" src="${listingObject.media[0]}" alt="Image of ${listingObject.title}"
                    class="img-listing-tile">
                <img id="img-listing-avatar" src="${listingObject.seller.avatar}" alt="User avatar"
                    class="img-avatar-listing">
            <h5 class="listing-title text-center">${listingObject.title}</h5>
            <div class="listing-tile-text">
                <p class="bids">${listingObject._count.bids} bids</p>
                <p class="time-left">${timeLeftString}</p>
                <p class="price">$${latestBidAmount}</p>
            </div>
        </button>
    `;

    return tileHTML;
}