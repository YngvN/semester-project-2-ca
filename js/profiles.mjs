// import * as api from './api.mjs';
// import * as utility from './utility.mjs';

// document.addEventListener('DOMContentLoaded', () => {
//     const btnProfileAvatar = document.getElementById('btn-profile-avatar');
//     const btnExit = document.getElementById('btn-exit');
//     const modal = document.getElementById('profileAvatarModal');
//     const avatarUrlInput = document.getElementById('avatarUrl');
//     const btnSaveAvatar = document.getElementById('btn-save-avatar');

//     btnProfileAvatar.addEventListener('click', () => {
//         btnProfileAvatar.classList.toggle('toggle');
//         utility.checkToggleClass(btnProfileAvatar, modal);
//         console.log("btnProfileAvatar pressed");
//     });

//     btnExit.addEventListener('click', () => {
//         utility.hideElement(modal);
//     });

//     btnSaveAvatar.addEventListener('click', async (event) => {
//         event.preventDefault();
//         await updateAvatar();
//     });

//     avatarUrlInput.addEventListener('change', previewFile);

//     updateUserProfile();
//     console.log("Profiles.mjs loaded");
// });

// async function findUsername() {
//     const loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
//     let loginData;

//     try {
//         loginData = JSON.parse(loginDataString);
//     } catch (error) {
//         console.error('Error parsing loginData:', error);
//         return null;
//     }

//     if (loginData && typeof loginData === 'object' && 'name' in loginData) {
//         const user = api.createURL('profiles', loginData.name);
//         console.log(user);
//         return loginData.name;
//     } else {
//         console.log('Name not found in loginData');
//         return null;
//     }
// }

// async function updateAvatar() {
//     const name = await findUsername();
//     if (typeof name !== 'string' || !name) {
//         console.error('Invalid username:', name);
//         return;
//     }

//     const method = 'PUT';
//     const category = 'profiles';
//     const subcategory = 'media';
//     const avatarUrl = document.getElementById('avatarUrl').value;

//     if (!avatarUrl) {
//         alert("No URL entered.");
//         return;
//     }

//     let loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
//     let loginData = loginDataString ? JSON.parse(loginDataString) : {};

//     const data = { avatar: avatarUrl };

//     try {
//         const response = await api.createURL(category, name, subcategory, method, data);
//         console.log('Avatar updated successfully:', response);

//         loginData.avatar = avatarUrl;
//         localStorage.setItem('loginData', JSON.stringify(loginData));
//         console.log('loginData avatar updated to:', avatarUrl);

//         utility.hideElement(modal);
//         updateUserProfile();
//     } catch (error) {
//         console.error('Error updating avatar:', error);
//     }
// }

// function updateUserProfile() {
//     const loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
//     let loginData;

//     try {
//         loginData = JSON.parse(loginDataString);
//     } catch (error) {
//         console.error('Error parsing loginData:', error);
//         return;
//     }

//     if (loginData) {
//         if (loginData.avatar) {
//             const avatarImage = document.querySelector("#btn-profile-avatar img");
//             avatarImage.src = loginData.avatar;
//         }

//         const usernameElement = document.getElementById("user-info-username");
//         usernameElement.textContent = loginData.name || 'N/A';

//         const emailElement = document.getElementById("user-info-email");
//         emailElement.textContent = loginData.email || 'N/A';

//         const creditsElement = document.getElementById("user-info-credits");
//         creditsElement.textContent = loginData.credits || '0';
//     } else {
//         console.log('loginData not found or invalid');
//     }
// }

// function previewFile() {
//     const preview = document.getElementById('preview');
//     const url = document.getElementById('avatarUrl').value;
//     preview.src = url;
// }

import * as api from './api.mjs';
import * as utility from './utility.mjs';

document.addEventListener('DOMContentLoaded', () => {
    const btnProfileAvatar = document.getElementById('btn-profile-avatar');
    const btnExit = document.getElementById('btn-exit');
    const modal = document.getElementById('profileAvatarModal');
    const avatarUrlInput = document.getElementById('avatarUrl');
    const btnSaveAvatar = document.getElementById('btn-save-avatar');

    btnProfileAvatar.addEventListener('click', () => {
        showModal(modal);
        console.log("btnProfileAvatar pressed");
    });

    btnExit.addEventListener('click', () => {
        hideModal(modal);
    });

    btnSaveAvatar.addEventListener('click', async (event) => {
        event.preventDefault();
        await updateAvatar();
    });

    avatarUrlInput.addEventListener('change', previewFile);

    updateUserProfile();
    console.log("Profiles.mjs loaded");
});

function showModal(modal) {
    modal.classList.add('show');
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    document.body.appendChild(backdrop);
    backdrop.addEventListener('click', () => hideModal(modal));
}

function hideModal(modal) {
    modal.classList.remove('show');
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
        backdrop.removeEventListener('click', hideModal);
        backdrop.remove();
    }
}

async function findUsername() {
    const loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
    let loginData;

    try {
        loginData = JSON.parse(loginDataString);
    } catch (error) {
        console.error('Error parsing loginData:', error);
        return null;
    }

    if (loginData && typeof loginData === 'object' && 'name' in loginData) {
        const user = api.createURL('profiles', loginData.name);
        console.log(user);
        return loginData.name;
    } else {
        console.log('Name not found in loginData');
        return null;
    }
}

async function updateAvatar() {
    const name = await findUsername();
    if (typeof name !== 'string' || !name) {
        console.error('Invalid username:', name);
        return;
    }

    const method = 'PUT';
    const category = 'profiles';
    const subcategory = 'media';
    const avatarUrl = document.getElementById('avatarUrl').value;

    if (!avatarUrl) {
        alert("No URL entered.");
        return;
    }

    let loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
    let loginData = loginDataString ? JSON.parse(loginDataString) : {};

    const data = { avatar: avatarUrl };

    try {
        const response = await api.createURL(category, name, subcategory, method, data);
        console.log('Avatar updated successfully:', response);

        loginData.avatar = avatarUrl;
        localStorage.setItem('loginData', JSON.stringify(loginData));
        console.log('loginData avatar updated to:', avatarUrl);

        hideModal(modal);
        updateUserProfile();
    } catch (error) {
        console.error('Error updating avatar:', error);
    }
}

function updateUserProfile() {
    const loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
    let loginData;

    try {
        loginData = JSON.parse(loginDataString);
    } catch (error) {
        console.error('Error parsing loginData:', error);
        return;
    }

    if (loginData) {
        if (loginData.avatar) {
            const avatarImage = document.querySelector("#btn-profile-avatar img");
            avatarImage.src = loginData.avatar;
        }

        const usernameElement = document.getElementById("user-info-username");
        usernameElement.textContent = loginData.name || 'N/A';

        const emailElement = document.getElementById("user-info-email");
        emailElement.textContent = loginData.email || 'N/A';

        const creditsElement = document.getElementById("user-info-credits");
        creditsElement.textContent = loginData.credits || '0';
    } else {
        console.log('loginData not found or invalid');
    }
}

function previewFile() {
    const preview = document.getElementById('preview');
    const url = document.getElementById('avatarUrl').value;
    preview.src = url;
}
