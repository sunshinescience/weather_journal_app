// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express (which we've already installed on the command line) to run server and routes
const express = require('express');

// Create an instance of our app, with express
const app = express();

// Dependencies
const bodyParser = require('body-parser');

/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware so that we can parse our data
app.use(bodyParser.urlencoded({ extended: false })); // Here we use the 'use' method to tell bodyParser exactly how we want our data to be dealt with
app.use(bodyParser.json()); // We're going to mostly want JSON

// Cors for cross origin allowance
const cors = require('cors'); // Require Cors (which we've already installed on the command line) which let's the browser and server talk to each other withour any security interruptions
app.use(cors());

// Initialize the main project folder
app.use(express.static('website')); // We use our 'use' method and this time, we're pointing our app to the folder that we want it to look at

// Setup Server
const port = 3000; // We set our port

const server = app.listen(port, listening); // Call the listen method and pass it our callback function

function listening() {
    console.log('server running');
	console.log(`server running on local host: ${port}`);
}

