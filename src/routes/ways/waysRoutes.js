const express = require('express');
const waysRoutes = express.Router()

const controllerWays = require('../../controllers/ways/controllerWays')
const ways = new controllerWays

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
  .post(()=>{
    // #swagger.tags = ['Ways']
  })

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/delete')
  .delete(()=>{
    // #swagger.tags = ['Ways']
  })



module.exports = waysRoutes;