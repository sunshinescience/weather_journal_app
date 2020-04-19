// Client side code

/* Global Variables */

// API key base URL for OpenWeatherMap API 
const appId = '2f23248e356de460d785e1aa8fd8bbda';
const baseURL = 'https://openweathermap.org/';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//TODO: Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API
// Make a POST request to our route (post the data)
const postData = async (url = '', data = {}) => {
    console.log(data);
    const response = await fetch(url, {
        method: 'POST', // Type of request we want to make, we want to post data somewhere
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch(error) {
        console.log('error', error);
        // TODO: handle the error
    };
};

// Add some data to our app endpoint as a test. Pass in some data in the form of an object
postData('/add', {temperature: 85, date: '04-13-2020', userResponse: 'warm'});
