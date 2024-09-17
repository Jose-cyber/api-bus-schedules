const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');
const deleteScheduleSchema = require('../../schemas/schedules/deleteScheduleSchema.js')
const patchScheduleSchema = require('../../schemas/schedules/patchScheduleSchema.js')
const listQueryParamSchema = require('../../schemas/schedules/listQueryParamSchema.js')
const createScheduleSchema = require('../../schemas/schedules/createScheduleSchema.js')

class ControllerSchedules{
  list(req, res){
    let reqParamValidator = listQueryParamSchema.validateSync(req.query, {stripUnknown: true})
    try {
          knex
            .select()
            .where(reqParamValidator)
            .from('schedules')
            .orderBy('start', 'asc')
            .then((queryResult) => {
              res.status(200).json({"schedules": queryResult})
          })
          .catch((error) => {
              res.status(500).json({ status: 'Failed'})
              logger.error(error.message)
          })

      } catch(error) {
          logger.error(error.message)
          res.status(400).json({ Missing: 'Parameters'});
      }        
  }
  create(req, res){
    try{
      createScheduleSchema.validateSync(req.body)
    
      knex
        .insert([{
          start: req.body.start,
          end: req.body.end,
          weekly: req.body.weekly,
          saturday: req.body.saturday,
          sunday: req.body.sunday, 
          come_from_sfx: req.body.come_from_sfx,
          to_sfx: req.body.to_sfx,
          itineraries_name: req.body.itineraries_name,
          itineraries_alias: req.body.itineraries_alias
        }])
        .into('schedules')
        .timeout()
        .then(() =>{
          res.status(201).json({status:"Sucess"})
        })
        .catch((error) =>{
          res.status(500).json({ status: 'Failed'})
          logger.error(error.message)
        })
      
    }
    catch(error){
      res.status(400).json({'Missing': 'Parameters!'})
      logger.error(error.message)
    }
   
  }
  edit(req, res){
    try {
      patchScheduleSchema.validateSync(req.body,  { abortEarly: false });
          knex('schedules')
            .where('id', req.body.id)
            .update({
              start: req.body.start,
              end: req.body.end,
              weekly: req.body.weekly,
              come_from_sfx: req.body.come_from_sfx,
              saturday: req.body.saturday,
              sunday: req.body.sunday,
              itineraries_name: req.body.itineraries_name,
              itineraries_alias: req.body.itineraries_alias,
            })
            .then(() => {
              res.status(200).json({ Status: 'Register '+ req.body.id +' updated sucefully'})
            })
            .catch((error) => {
              res.status(500).json({ "Status": "Failed", "Error to update register": req.body.id})
              logger.error(error.message);
            })
    }
    catch(error) {
        logger.error(error.message)
        res.status(400).json({ Missing: 'Parameters'});
    } 
  } 
  delete(req, res){
    try {
      deleteScheduleSchema.validateSync(req.body,  { abortEarly: false });
      const scheduleId = req.body.id;
            knex('schedules')
              .del()
              .where('id', scheduleId)
              .timeout(1000)
              .then((query_result) => {
                res.status(200).json({ status: 'Success', message: "schedule  "+scheduleId+" deleted successfully." })
                logger.info("Schedule "+scheduleId+" deleted successfully.", query_result )
            })
            .catch((error) =>{
                res.status(500).json({ status: 'Failed'})
                logger.error(error.message);
            })      
    }
    catch (error) {
      logger.error(error.message)
      res.status(400).json({ Missing: 'Parameters'});
  } 
 }

}


module.exports = ControllerSchedules;
