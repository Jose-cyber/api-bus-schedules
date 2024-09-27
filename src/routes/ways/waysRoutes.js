const express = require('express');
const waysRoutes = express.Router()

const Ways = require('../../controllers/ways/controllerWays')
const verifyToken = require('../../middlewares/authMiddleware')

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list')
  .get(Ways.list, ()=>{
    // #swagger.tags = ['Ways']
  })
  
waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list/filter')
  .get(Ways.listByName, ()=>{
    // #swagger.tags = ['Ways']

  })

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/create')
  .post(verifyToken, Ways.create, ()=>{
    // #swagger.tags = ['Ways']
    
    /* #swagger.security = [{
      "bearerAuth": []
    }] */
  })

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/update')
  .patch(verifyToken, Ways.update, ()=>{
    // #swagger.tags = ['Ways']
    
    /* #swagger.security = [{
      "bearerAuth": []
    }] */
  })


waysRoutes
  .route('/api-bus-schedules/api/v1/ways/delete')
  .delete(verifyToken, Ways.delete, ()=>{
    // #swagger.tags = ['Ways']
    
    /* #swagger.security = [{
      "bearerAuth": []
    }] */
  })



module.exports = waysRoutes;