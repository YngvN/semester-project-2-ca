import * as api from './api.mjs';
import * as utility from './utility.mjs';

document.addEventListener('DOMContentLoaded', () => {

    const btnProfileAvatar = document.getElementById('btn-profile-avatar');
    const btnExit = document.getElementById('btn-exit');
    const modal = document.getElementById('profileAvatarModal');



    btnProfileAvatar.addEventListener('click', function() {
        btnProfileAvatar.classList.toggle('toggle');
        utility.checkToggleClass(btnProfileAvatar, modal);
        console.log("btnProfileAvatar pressed");
    });

    btnExit.addEventListener('click', function() {
        utility.hideElement(modal);
    });

    document.getElementById('btn-save-avatar').addEventListener('click', async function(event) {
        event.preventDefault(); 
        
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

            utility.hideElement(modal);
            updateUserProfile();

        } catch (error) {
            console.error('Error updating avatar:', error);
        }
    });
});




/**
 * Fetches user data from storage.
 */
async function findUsername() {
    let loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
    let loginData;

    try {
        loginData = JSON.parse(loginDataString);
    } catch (error) {
        console.error('Error parsing loginData:', error);
        return;
    }


    if (loginData && typeof loginData === 'object' && 'name' in loginData) {
        // console.log("User Name: ", loginData.name);
        const user = api.createURL('profiles', loginData.name);
        console.log(user);
        return loginData.name;

    } else {
        console.log('Name not found in loginData');
    }
    
    api.createURL('profiles', )
}



function updateUserProfile() {
    let loginDataString = localStorage.getItem('loginData') || sessionStorage.getItem('loginData');
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

document.getElementById('avatarUrl').addEventListener('change', previewFile);


updateUserProfile();
findUsername();



console.log("Profiles.mjs loaded")

