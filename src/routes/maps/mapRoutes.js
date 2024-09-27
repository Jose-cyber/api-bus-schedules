const express = require('express');
const mapsRoutes = express.Router()

const Maps = require('../../controllers/maps/controllerMaps')
const verifyToken = require('../../middlewares/authMiddleware')

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/list')
  .get(Maps.list, ()=>{
    // #swagger.tags = ['Maps']
  })

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/create')
  .post(verifyToken, Maps.create,()=>{
  // #swagger.tags = ['Maps']
  
  /* #swagger.security = [{
    "bearerAuth": []
  }] */
})

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/update')
  .patch(verifyToken, Maps.update,()=>{
  // #swagger.tags = ['Maps']
  
  /* #swagger.security = [{
    "bearerAuth": []
  }] */
})

mapsRoutes
  .route('/api-bus-schedules/api/v1/maps/delete')
  .delete(verifyToken, Maps.delete,()=>{
  // #swagger.tags = ['Maps']

  /* #swagger.security = [{
    "bearerAuth": []
  }] */
})
  

module.exports = mapsRoutes;