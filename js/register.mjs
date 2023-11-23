import { registerURL } from "./url.mjs";
import { loginURL } from "./url.mjs";

/**
 * Sends information to create a new user
 */
export async function registerUser(name, email, password) {

    const userData = {
        name: name,
        email: email,
        password: password
    };

    try {
        const response = await fetch(registerURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

export async function loginUser(email, password, rememberMe) {
    const loginDetails = {
        email: email,
        password: password
    };
        console.log(rememberMe);

    try {
        const response = await fetch(loginURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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

        console.log('Login successful:', data);
    } catch (error) {
        console.error('Error during login:', error);
    }
}