// Environment Variable Configuration
require('dotenv').config();

const path = require('path');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const HttpError = require('./models/https-error');

const dashboardRoute = require('./routes/dashboard-route');

// CORS middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow access to any domain
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    ); // Allow these headers
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE'); // Allow these methods
    next();
});


// Body parser middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));



// Routes middleware initialization
app.use('/api/dashboard' ,dashboardRoute); 



// Page not found middleware
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error; 
});


// Error handling middleware
app.use((error, req, res, next) => {
    // Deleting the image if it exists
    if(req.file){
        fs.unlink(req.file.path, err => {
            console.log(err);
    });
    }
    // Checking if the response has already been sent
    if(res.headerSent){
        return next(error);
    }
    // Sending the error
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});


// listening to port 
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server is running on port 8000")
});