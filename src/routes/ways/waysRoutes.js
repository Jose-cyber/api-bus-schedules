const express = require('express');
const waysRoutes = express.Router()

const controllerWays = require('../../controllers/ways/controllerWays')
const ways = new controllerWays

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list')
  .get(ways.list)

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/list/filter')
  .get(ways.listByName)

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/create')
  .post()

waysRoutes
  .route('/api-bus-schedules/api/v1/ways/delete')
  .delete()



module.exports = waysRoutes;