


const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODcyLCJuYW1lIjoiVGVzdCIsImVtYWlsIjoidGVzdDEyM0BzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6bnVsbCwiY3JlZGl0cyI6MTAwMCwid2lucyI6W10sImlhdCI6MTcwMDc3MTAxNn0.-jFtmN3_-nz1Oap38fXnMZ0JvOgZxt3Jd_grKNxBG64";


const options = {
  headers: {
    Authorization: 'Bearer ' + accessToken,
  },
}

export function checkToken() {
    let loginDataString = sessionStorage.getItem('loginData');

    console.log("Retrieved loginDataString:", loginDataString); 

    if (!loginDataString) {
        console.log("loginData is not found in session storage.");
        return;
    }

    let loginData;
    try {
        loginData = JSON.parse(loginDataString);
    } catch (e) {
        console.error("Error parsing loginData from session storage:", e);
        return;
    }

    console.log("Parsed loginData:", loginData);

    if (Array.isArray(loginData)) {
        let hasAccessToken = loginData.some(item => item.accessToken !== undefined);
        console.log("Has accessToken:", hasAccessToken); 

        console.log("loginData is not an array or is in an incorrect format.");
    }
}

console.log("checkToken.mjs loaded")
