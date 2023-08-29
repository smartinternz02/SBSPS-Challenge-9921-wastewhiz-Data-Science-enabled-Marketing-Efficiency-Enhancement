const HttpError = require('../models/https-error');

const predictions = require('../utils/predictions');
const predValues = require('../utils/prediction-values');


// -------------------------------------------GET-------------------------------------------------- //

// api/dashboard => GET [controller for getting dashboard]
const getDashboard = async (req, res, next) =>{
    res.sendFile(__dirname + '/dashboard.html');
};


// -------------------------------------------POST-------------------------------------------------- //

// api/dashboard/predictions => POST [controller for posting PREDCITIONS]

const postPredictions = async (req, res, next) =>{
    const values = predValues.getValues();

    let prediction;
    try{
        prediction = await predictions.predict();
    }
    catch(err){
        const error = new HttpError('Prediction failed', 500);
        return next(error);
    }
    res.json({prediction: prediction});
};



// export
module.exports = {
    getDashboard,
    postPredictions
} ;
