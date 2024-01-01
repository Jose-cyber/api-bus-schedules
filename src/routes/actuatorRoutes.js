const express = require('express');
const Health = require('../controllers/actuator/controllerActuator')
const healthAndChecking = new Health
const actautorRoutes = express.Router();


actautorRoutes
    .route('/api/v1/health')
    .get(healthAndChecking.actuator)

    
module.exports = actautorRoutes;