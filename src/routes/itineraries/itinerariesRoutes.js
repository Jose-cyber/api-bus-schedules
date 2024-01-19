const express = require('express');
const ControllerItineraries = require('../../controllers/itineraries/controllerItineraries')
const Itineraries = new ControllerItineraries
const itinerariesRoutes = express.Router();


itinerariesRoutes
    .route('/api/v1/itineraries/list',)
    .get(Itineraries.list, ()=>{
      // #swagger.tags = ['Itineraries']
      
      /* #swagger.responses[200] = { 
           description: "Register data, and sent email",
           schema: { $ref: "#/definitions/Itineraries.list" }
      }*/

      /* #swagger.responses[500] = { 
           description: "Register data, and sent email",
           schema: { status: 'Error'}
      }*/

    })

itinerariesRoutes
    .route('/api/v1/itineraries/create',)
    .post(Itineraries.create, ()=>{
      // #swagger.tags = ['Itineraries']
      
      /* #swagger.responses[200] = { 
          description: "Register data, and sent email",
          schema: { $ref: "#/definitions/Itineraries/create" }
      }*/
    })
    
itinerariesRoutes
    .route('/api/v1/itineraries/delete',)
    .delete(Itineraries.delete, ()=>{
      // #swagger.tags = ['Itineraries']  
    })

itinerariesRoutes
    .route('/api/v1/itineraries/edit',)
    .patch(Itineraries.edit, ()=>{
      // #swagger.tags = ['Itineraries']  
    })


module.exports = itinerariesRoutes;