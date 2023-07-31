const HttpError = require('../models/https-error');


// -------------------------------------------GET-------------------------------------------------- //

// api/dashboard => GET [controller for getting dashboard]
const getDashboard = async (req, res, next) =>{
    res.sendFile(__dirname + '/dashboard.html');
}


// export
module.exports = {getDashboard} ;
