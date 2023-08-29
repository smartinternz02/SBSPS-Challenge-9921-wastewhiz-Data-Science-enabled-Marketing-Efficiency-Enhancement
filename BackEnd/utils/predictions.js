require('dotenv').config();
const axios = require('axios');
const HttpError = require('../models/https-error');

const req = require('express/lib/request');


const getToken = async (req, res) => {
		// get token
		let data = "grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=" + process.env.IBM_API_KEY;

		let config = {
			method: 'post',
			maxBodyLength: Infinity,
			url: 'https://iam.cloud.ibm.com/identity/token',
			headers: { 
				'Content-Type': 'application/x-www-form-urlencoded', 
				'Accept': 'application/json'
			},
			data : data
		};

		let token;
		try {
			const response = await axios.request(config);
			token = response.data.access_token;
			if (token == undefined){
				const error = new HttpError('Token is undefined', 500);
				return next(error);
			}
		}
		catch(err){
			console.log(err);
			const error = new HttpError('Token request failed', 500);
			return next(error);
		};
		return token;
}

const getPrediction = async (req, res, next, token, values) => {
	// after token is received
	let data = '{\r\n  "input_data": [\r\n    {\r\n      "fields": [\r\n                                "Unnamed: 0",\r\n                                "Deal_title",\r\n                                "Industry",\r\n                                "Deal_value",\r\n                                "Weighted_amount",\r\n                                "Date_of_creation",\r\n                                "Pitch",\r\n                                "Lead_revenue",\r\n                                "Fund_category",\r\n                                "Geography",\r\n                                "Location",\r\n                                "Designation",\r\n                                "Hiring_candidate_role",\r\n                                "Lead_source",\r\n                                "Level_of_meeting",\r\n                                "Last_lead_update",\r\n                                "Internal_POC",\r\n                                "Resource",\r\n                                "Internal_rating"\r\n                        ],\r\n      "values": [["0","TitleM5DZY","Restaurants",320506,2067263.7,"29-03-2020","Product_2","50 - 100 Million","Category 2","USA","TX","Executive Vice President","Community pharmacist","Website","Level 3","No track","Davis,Sharrice A","No",3]]\r\n    }\r\n  ]\r\n}';

	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://jp-tok.ml.cloud.ibm.com/ml/v4/deployments/india0/predictions?version=2021-05-01',
		headers: { 
			'Accept': 'application/json', 
			'Authorization': 'Bearer ' + token, 
			'Content-Type': 'application/json;charset=UTF-8'
		},
		data : data
	};

	let prediction;
	try {
		const response = await axios.request(config)
		prediction = response.data.predictions; //[0].values[0][0]
	}
	catch(err) {
		console.log(err.response.data.errors[0].message);
		const error = new HttpError('Prediction request failed', 500);
		return next(error);
	};
	
	return prediction;
}


const predict = async (req, res, next, values) => {

	let access_token;
	try {
		access_token = await getToken(req, res, next)
	}
	catch(err){
		const error = new HttpError('Token failed', 500);
		return next(error);
	}

	if(access_token == undefined){
		const error = new HttpError('Token is undefined', 500);
		return next(error);
	}

	let prediction;
	try {
		prediction = await getPrediction(req, res, next, access_token, values)
	}
	catch(err){
		const error = new HttpError('Prediction failed', 500);
		return next(error);
	}

	if( prediction == undefined){
		const error = new HttpError('Prediction is undefined', 500);
		return next(error);
	}

	return prediction;
}

module.exports = {predict};