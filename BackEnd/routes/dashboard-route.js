// Third party imports
const express = require('express');

// Local imports
const dashboardController = require('../controllers/dashboard-controller');

// Creating router
const router = express.Router();


// api/dashboard => GET [ROUTE for getting dashboard]
router.get('/', dashboardController.getDashboard);



// exporting router
module.exports = router;