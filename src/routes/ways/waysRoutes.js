const express = require('express');
const waysRoutes = express.Router()

const controllerWays = require('../../controllers/ways/controllerWays')
const ways = new controllerWays
const verifyToken = require('../../middlewares/authMiddleware')

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list')
  .get(ways.list, ()=>{
    // #swagger.tags = ['Ways']
  })
  
waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list/filter')
  .get(ways.listByName, ()=>{
    // #swagger.tags = ['Ways']
  })

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/create')
  .post(verifyToken, ()=>{
    // #swagger.tags = ['Ways']
  })

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/delete')
  .delete(verifyToken, ()=>{
    // #swagger.tags = ['Ways']
  })



module.exports = waysRoutes;