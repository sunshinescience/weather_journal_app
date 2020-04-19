// Client side code

/* Global Variables */

// API key base URL for OpenWeatherMap API 
const apiKey = '2f23248e356de460d785e1aa8fd8bbda';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; // Note, that I found the API call here, which contains the base URL: https://openweathermap.org/current#zip

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//TODO: Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API. 
// Make a POST request to our route (post the data) with two arguments: a url to make the POST to, and a JS object holding the data to post
/*
const postData = async (url = '', data = {}) => { 
    const response = await fetch(url, {
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(), 
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};

// Add some data to our app endpoint as a test. Pass in some data in the form of an object
postData('/add', {temperature: 85, date: '04-13-2020', userResponse: 'warm'});
*/

document.getElementById('generate').addEventListener('click', performAction);


function performAction(e){
    const zipValue =  document.getElementById('zip').value;
    getWeather(baseURL, zipValue, apiKey);
}

const getWeather = async (baseURL, zip, apiKey)=>{
    const res = await fetch(`${baseURL}?zip=${zip},us&appid=${apiKey}`);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    }  catch(error) {
        console.log("error");
    // appropriately handle the error
    }
}



