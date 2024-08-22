const express = require('express');
const mapsRoutes = express.Router()

const maps = require('../../controllers/maps/controllerMaps')

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/list')
  .get(maps.list, ()=>{
    // #swagger.tags = ['Maps']
  })

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/create')
  .post(maps.list, ()=>{
    // #swagger.tags = ['Maps']
})

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/update')
  .patch(maps.list, ()=>{
    // #swagger.tags = ['Maps']
})

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/delete')
  .delete(()=>{
  // #swagger.tags = ['Maps']
})
  

module.exports = mapsRoutes;