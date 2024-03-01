const express = require('express');
const Health = require('../../controllers/actuator/controllerActuator')
const healthAndChecking = new Health
const actautorRoutes = express.Router();


actautorRoutes
    .route('/api-bus-schedules/health')
    .get(healthAndChecking.actuator, () =>{
      // #swagger.tags = ['Actuator']
      
      /* #swagger.responses[200] = { 
          description: "Success to connect to database",
          schema: { status: 'UP'}
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database",
          schema: { status: 'DOWN'}
      }*/
    })

    
module.exports = actautorRoutes;