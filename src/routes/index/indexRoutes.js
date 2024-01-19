const express = require('express');
const Index = require('../../controllers/index/controllerIndex.js')
const IndexController = new Index
const indexRoutes = express.Router();


indexRoutes
    .route('/')
    .get(IndexController.index, () =>{
      // #swagger.tags = ['Index']
      
      /* #swagger.responses[200] = { 
        description: "Index page",
        schema: {service: "api-bus-schedules"}
      }*/
    })

    
module.exports = indexRoutes;