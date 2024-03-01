const express = require('express');
const ControllerSchedules = require('../../controllers/schedules/controllerSchedules.js')
const schedules = new ControllerSchedules


const schedulerRoutes = express.Router();


schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/list')
    .get(schedules.list, ()=>{
      // #swagger.tags = ['Schedules']
      
      /*#swagger.parameters['itinerario'] = {
          in: 'query',
          description: 'Filter by itinerarie.',
          required: false,
        } */
        /*#swagger.parameters['semanal'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by semanal values.',
          required: false,

        } */
        /*#swagger.parameters['sabado'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by sabado values.',
          required: false,

        } */
        /*#swagger.parameters['domingo'] = {
          in: 'query',
          type: 'boolean',
          description: 'Filter by domingo values.',
          required: false,
         
        } */


      /*#swagger.responses[200] = { 
        description: "Listed all register",
        schema: {"horarios":[{"id":1,"saida":"05:30:00","chegada":"06:30:00","semanal":true,"sabado":false,"domingo":false,"itinerario":"ml_sjc"},{"id":2,"saida":"06:40:00","chegada":"07:40:00","semanal":true,"sabado":false,"domingo":false,"itinerario":"ml_sjc"}]}
      }*/
      
      /*#swagger.responses[500] = { 
        description: "Failed to connect to database",
        schema: { Status: 'Error!'}
      }*/

      /*#swagger.responses[400] = { 
        description: "Bad request, schema or missing parameter",
        schema: { error: "Missing or wrong Parameter" }
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/create')
    .post(schedules.create, ()=>{
      // #swagger.tags = ['Schedules']
      
      /*#swagger.parameters['send'] = {
        in: 'body',
        description: 'Register new schedule',
        required: true,
        schema: { $ref: "#/definitions/schedulesCreate"}
      }*/

      /* #swagger.responses[201] = { 
           description: "Data was registered in database",
           schema: {"New Route Created":"Sucess!"}
      }*/

      /* #swagger.responses[500] = { 
           description: "Failed to connect to database",
           schema: {"Create route": "failed!"}
      }*/

      /* #swagger.responses[400] = { 
           description: "Bad request, schema or parameter is invalid",
           schema: {'Missing': 'Parameters!'}
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/edit')
    .patch(schedules.edit, ()=>{
      // #swagger.tags = ['Schedules']

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
           description: "Bad request, schema or parameter is invalid",
           schema: {'Missing': 'Parameters!'}
      }*/
    })

schedulerRoutes
    .route('/api-bus-schedules/api/v1/schedules/delete')
    .delete(schedules.delete, ()=>{
      // #swagger.tags = ['Schedules']

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

      /*#swagger.responses[500] = { 
        description: "Failed to delete register to database",
        schema: { status: 'Failed'}
      }*/

      /*#swagger.responses[400] = { 
        description: "Bad request, schema or parameter is invalid",
        schema: {'Missing': 'Parameters!'}
      }*/

    })

module.exports = schedulerRoutes;