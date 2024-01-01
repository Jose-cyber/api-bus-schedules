const express = require('express');
const ControllerSchedules = require('../controllers/schedules/controllerSchedules.js')
const schedules = new ControllerSchedules


const schedulerRoutes = express.Router();


schedulerRoutes
    .route('/api/v1/schedules/list')
    .get(schedules.list)

schedulerRoutes
    .route('/api/v1/schedules/create')
    .post(schedules.create)

schedulerRoutes
    .route('/api/v1/schedules/patch')
    .patch(schedules.edit)

schedulerRoutes
    .route('/api/v1/schedules/delete')
    .delete(schedules.delete)

module.exports = schedulerRoutes;