const express = require('express');
const ControllerSchedules = require('../../controllers/schedules/controllerSchedules.js')
const schedules = new ControllerSchedules


const schedulerRoutes = express.Router();


schedulerRoutes
    .route('/api/v1/schedules/list')
    .get(schedules.list, ()=>{
      // #swagger.tags = ['Schedules']
    })

schedulerRoutes
    .route('/api/v1/schedules/create')
    .post(schedules.create, ()=>{
      // #swagger.tags = ['Schedules']  
    })

schedulerRoutes
    .route('/api/v1/schedules/edit')
    .patch(schedules.edit, ()=>{
      // #swagger.tags = ['Schedules'] 
    })

schedulerRoutes
    .route('/api/v1/schedules/delete')
    .delete(schedules.delete, ()=>{
      // #swagger.tags = ['Schedules']  
    })

module.exports = schedulerRoutes;