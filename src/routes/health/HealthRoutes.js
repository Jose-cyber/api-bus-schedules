const express = require('express');
const health = require('../../controllers/health/controllerHealth')
const healthRoutes = express.Router();


healthRoutes
    .route('/health')
    .get(health.check, () =>{
      // #swagger.tags = ['Health']
      
      /* #swagger.responses[200] = { 
          description: "Success to connect to database",
          schema: { status: 'UP'}
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database",
          schema: { status: 'DOWN'}
      }*/
    })

    
module.exports = healthRoutes;