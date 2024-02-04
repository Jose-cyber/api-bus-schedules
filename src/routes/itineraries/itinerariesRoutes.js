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
           schema: [{"id":1,"name":"ml_sjc","alias":"Monteiro Lobato x São José dos Campos"},{"id":2,"name":"ml_sbt","alias":"Monteiro Lobato x São Benedito"}]
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

      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Register and send information.',
        required: true,
        schema: { $ref: "#/definitions/itinerariesCreate"}
      }*/
      
      /* #swagger.responses[201] = { 
          description: "Register data, and sent email",
          schema: { "status": "Success!" }
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database",
          schema: {status: 'Failed'}
      }*/
      
      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          schema: { Missing: 'Parameters'}
      }*/
    })
    
itinerariesRoutes
    .route('/api/v1/itineraries/delete',)
    .delete(Itineraries.delete, ()=>{
      // #swagger.tags = ['Itineraries']

      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Delete register.',
        required: true,
        schema: { $ref: "#/definitions/itinerariesDelete"}
      }*/

      /* #swagger.responses[200] = { 
          description: "Register in database was deleted success!",
          schema: { "status": "Success!","message": "Register {'id': 7'name': sjc_sp'alias': São José dos Campos X São Paulo} deleted successfully."}
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database!",
          schema: { status: 'Failed'}
      }*/

      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          schema: { Missing: 'Parameters'}
      }*/

    })

itinerariesRoutes
    .route('/api/v1/itineraries/edit',)
    .patch(Itineraries.edit, ()=> {
      // #swagger.tags = ['Itineraries']
      
      /* #swagger.parameters['send'] = {
        in: 'body',
        description: 'Update register.',
        required: true,
        schema: { $ref: "#/definitions/itinerariesEdit"}
      }*/
      
      /* #swagger.responses[200] = { 
          description: "Updated register in database",
          schema: { "Operation": "Sucess!","Action": "Update","Register": {"name": "sjc_sp","alias": "São José dos Campos X São Paulo"},"New Register": {"name": "sjc_sp", "alias": "São José dos Campos X São Paulo Capital"}}
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database!",
          schema: {"Operation": "Failed!","Action": "Update"}
      }*/

      /* #swagger.responses[400] = { 
          description: "Request or schema is not valid",
          schema: {"Missing": "Parameters"}
      }*/     
    })


module.exports = itinerariesRoutes;