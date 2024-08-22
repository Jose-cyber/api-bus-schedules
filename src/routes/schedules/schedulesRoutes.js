const express = require('express');
const ControllerSchedules = require('../../controllers/schedules/controllerSchedules.js')
const schedules = new ControllerSchedules


const schedulerRoutes = express.Router();
const verifyToken = require('../../middlewares/authMiddleware')

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/list')
    .get(schedules.list, ()=>{
      // #swagger.tags = ['Schedules']
      
      /*#swagger.parameters['itineraries_name'] = {
          in: 'query',
          description: 'Filter by itinerarie.',
          required: false,
        } */
        /*#swagger.parameters['weekly'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by weekly schedules.',
          required: false,

        } */
        /*#swagger.parameters['saturday'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by saturday schedules.',
          required: false,

        } */
        /*#swagger.parameters['sunday'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by sunday schedules.',
          required: false,
  
        } */
        /*#swagger.parameters['come_from_sfx'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by come_from_sfx schedules.',
          required: false,
  
        } */
        
        /*#swagger.parameters['to_sfx'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by to_sfx schedules.',
          required: false,
  
        } */

      /*#swagger.responses[200] = { 
        description: "Listed all register",
        schema: {"horarios":[{"id":1,"saida":"05:30:00","chegada":"06:30:00","semanal":true,"sabado":false,"domingo":false,"itinerario":"ml_sjc"},{"id":2,"saida":"06:40:00","chegada":"07:40:00","semanal":true,"sabado":false,"domingo":false,"itinerario":"ml_sjc"}]}
      }*/
      
      /* #swagger.responses[500] = {
           description: "Register data, and sent email",
            content: {
              "application/json": {
                schema: { 
                  "type": "object",
                  "properties": {
                      status: {
                      type: 'string',
                      example: 'Failed'
                    }
                }
              }  
            }  
          }
      }*/

      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          content: {
            "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "Missing": { 
                        type: "object",
                        example: "Parameters" 
                      }
                    }
                  }
            }
          }
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/create')
    .post(verifyToken, schedules.create, ()=>{
      // #swagger.tags = ['Schedules']

      /* #swagger.security = [{
        "bearerAuth": []
      }] */
      
      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Register new schedule',
        required: true,
        schema: { $ref: "#/definitions/schedulesCreate"}
      }*/

      /* #swagger.responses[201] = {
           description: "Data was registered in database",
            content: {
              "application/json": {
                schema: { 
                  "type": "object",
                  "properties": {
                      status: {
                      type: 'string',
                      example: 'Sucess'
                    }
                }
              }  
            }  
          }
      }*/

      /* #swagger.responses[500] = {
           description: "Register data, and sent email",
            content: {
              "application/json": {
                schema: { 
                  "type": "object",
                  "properties": {
                      status: {
                      type: 'string',
                      example: 'Failed'
                    }
                }
              }  
            }  
          }
      }*/

      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          content: {
            "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "Missing": { 
                        type: "object",
                        example: "Parameters" 
                      }
                    }
                  }
            }
          }
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/update')
    .patch(verifyToken, schedules.edit, ()=>{
      // #swagger.tags = ['Schedules']

      /* #swagger.security = [{
        "bearerAuth": []
      }] */

      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Edit an existent schedule',
        required: true,
        schema: { $ref: "#/definitions/schedulesEdit"}
      }*/

      /* #swagger.responses[200] = { 
          description: "Register was updated in database",
          schema: { Status: 'Register 12 updated sucefully'}
      }*/

      /* #swagger.responses[500] = { 
          description: "Failed to connect to database",
          schema: { "Status": "Failed", "Error to update register": 12}
      }*/

      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          content: {
            "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "Missing": { 
                        type: "object",
                        example: "Parameters" 
                      }
                    }
                  }
            }
          }
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/delete')
    .delete(verifyToken, schedules.delete, ()=>{
      // #swagger.tags = ['Schedules']
      
      /* #swagger.security = [{
        "bearerAuth": []
      }] */

      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Delete an existent schedule',
        required: true,
        schema: { $ref: "#/definitions/schedulesDelete"}
      }*/

      /*#swagger.responses[200] = { 
        description: "Register was delete in database",
        schema: { Status: 'Register 12 Deleted Sucefully'}
      }*/

      /* #swagger.responses[500] = {
           description: "Register data, and sent email",
            content: {
              "application/json": {
                schema: { 
                  "type": "object",
                  "properties": {
                      status: {
                      type: 'string',
                      example: 'Failed'
                    }
                }
              }  
            }  
          }
      }*/    

      /* #swagger.responses[400] = { 
          description: "Bad request, schema or parameters is invalid",
          content: {
            "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "Missing": { 
                        type: "object",
                        example: "Parameters" 
                      }
                    }
                  }
            }
          }
      }*/

    })

module.exports = schedulerRoutes;