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
            .from('horarios')
            .then((queryResult) => {
                res.status(200).json({"horarios": queryResult})
                logger.info(queryResult)
          })
          .catch((error) => {
              res.status(400).json({ Status: 'Error!'})
              logger.error(error.message)
          })
          .finally(() => {
            knex.destroy();
          })
      } catch(error) {
          logger.error(error.message)
          res.status(400).json({ "error": "Missing or wrong Parameter" });
      }        
  }
  create(req, res){
    try{
      createScheduleSchema.validateSync(req.body)
      res.status(201).json({"New Route Created":"Sucess!"})
    }
    catch(error){
      res.status(400).json({'Missing': 'Parameters!'})
      logger.error(error.message)
    }
   
  }
  edit(req, res){
    try {
      patchScheduleSchema.validateSync(req.body,  { abortEarly: false });
          knex('horarios')
            .where('id', req.body.id)
            .update({
              saida: req.body.saida,
              chegada: req.body.chegada,
              semanal: req.body.semanal,
              sabado: req.body.sabado,
              domingo: req.body.domingo,
              itinerario: req.body.itinerario,
            })
            .then(() => {
              res.status(200).json({ Status: 'Register '+ req.body.id +'Deleted Sucefully'})
            })
            .catch((error) => {
              res.status(500).json({ Status: 'Failed'})
              console.error('Error to update register: '+req.body.id, error);
            })
            .finally(() => {
              knex.destroy(); 
            });
    }
    catch(error) {
          return res.status(400).json({ Missing: 'Parameters'});
    } 
  } 
  delete(req, res){
    try {
      deleteScheduleSchema.validateSync(req.body,  { abortEarly: false });
      const scheduleId = req.body.id;
            knex('horarios')
              .del()
              .where('id', scheduleId)
              .timeout(1000)
              .then((query_result) => {
                res.status(200).json({ status: 'Success', message: "schedule  "+scheduleId+" deleted successfully." })
                logger.info("Schedule "+scheduleId+" deleted successfully.", query_result )
            })
            .catch((error) =>{
                res.status(500).json({ status: 'Failed'})
                logger.error(error);
            })      
            .finally(() => {
              knex.destroy();
            });
    }
    catch (err) {
      return res.status(400).json({ Missing: 'Parameters'});
  } 
 }

}


module.exports = ControllerSchedules;
