const HttpError = require('../models/https-error');

const predictions = require('../utils/predictions');
const predValues = require('../models/prediction-model');


// -------------------------------------------GET-------------------------------------------------- //

// api/dashboard => GET [controller for getting dashboard]
const getDashboard = async (req, res, next) =>{
    res.sendFile(__dirname + '/dashboard.html');
};


// -------------------------------------------POST-------------------------------------------------- //

// api/dashboard/predictions => POST [controller for posting PREDCITIONS]

const postPredictions = async (req, res, next) =>{
    const {geography} = req.body;
    if (!geography){
        const error = new HttpError('Invalid inputs passed, please check your data', 422);
        return next(error);
    }
    let values;
    try{
        values = await predValues.getValues(req, res, next);
    }
    catch(err){
        const error = new HttpError('Getting values failed', 500);
        return next(error);
    }

    let prediction;
    try{
        prediction = await predictions.predict(req, res, next, values, geography);
    }
    catch(err){
        const error = new HttpError('Prediction failed in controller', 500);
        return next(error);
    }
    console.log(prediction[0].values[0][0]);
    res.json({"prediction": prediction[0].values[0][0]});
};



// export
module.exports = {
    getDashboard,
    postPredictions
} ;
