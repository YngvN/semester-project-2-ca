import { registerURL, loginURL } from "./url.mjs";

/**
 * Sends information to create a new user
 */
export async function registerUser(name, email, password) {
    const userData = { name, email, password };

    try {
        const response = await fetch(registerURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        console.log("Create user success");
        const data = await response.json();
        return data.success;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return false;
    }
}

export async function loginUser(email, password, rememberMe) {
    const loginDetails = { email, password };

    try {
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDetails)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (rememberMe) {
            localStorage.setItem('loginData', JSON.stringify(data));
        } else {
            sessionStorage.setItem('loginData', JSON.stringify(data));
        }

        sessionStorage.setItem('loggedIn', 'true');
        console.log('Login successful:', data);
        return true;
    } catch (error) {
        console.error('Error during login:', error);
        return false;
    }
}
