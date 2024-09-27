const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');

// schemas
const listQueryParamSchema = require('../../schemas/ways/listWaysSchema.js')
const createUpdateDeleteWaysSchema = require('../../schemas/ways/createUpdateDeleteWaysSchema.js')



class Ways{
    list(req, res){
       knex
         .select()
         .from('ways')
         .then((queryResult)=>{
           return res.status(200).json({ways: queryResult})
         })
         .catch((error) =>{
            logger.error(error.message)
         })

    }
    listByName(req, res){
      try {
        let reqParamValidator = listQueryParamSchema.validateSync(req.query)

        knex
          .select()
          .from('ways')
          .where(reqParamValidator)
          .then((queryResult)=>{
            return res.status(200).json({ways: queryResult})
        })
        .catch((error) =>{
          res.status(500)
          logger.error(error.message)
        })
      }
      catch(error){
        res.status(400).json({"Missing": "Parameter"})
        logger.error(error.message)
      }
   }
   create(req, res){
    try {
      createUpdateDeleteWaysSchema.validateSync(req.body)

      knex
        .insert([{
          route_alias: req.body.route_alias,
          route_name: req.body.route_name,
          bus_stops: JSON.stringify(req.body.bus_stops)
        }])
        .into('ways')
        .then((request)=>{
          res.status(200).json({status: 'sucess'})
          logger.info(request)
        })
        .catch((error) =>{
          res.status(500).json({status: 'Failed'})
          logger.error(error.message)
        })

    }catch(error){
      res.status(400).json({"Missing": "Parameter"})
      logger.error(error.message)
    }
    


   }
   update(req, res){
    try {
      createUpdateDeleteWaysSchema.validateSync(req.body)

      knex('ways')
        .where({
          route_alias: req.body.route_alias,
          route_name: req.body.route_name,
        })
        .update({
          bus_stops: JSON.stringify(req.body.bus_stops)
        })
        .then((request)=>{
          res.status(200).json({status: 'sucess'})
          logger.info(request)
        })
        .catch((error) =>{
          res.status(500).json({status: 'Failed'})
          logger.error(error.message)
        })

    }catch(error){
      res.status(400).json({"Missing": "Parameter"})
      logger.error(error.message)
    }
    
   }
   delete(req, res){
    try {
      createUpdateDeleteWaysSchema.validateSync(req.body)

      knex('ways')
        .where({
          route_alias: req.body.route_alias,
          route_name: req.body.route_name,
          bus_stops: JSON.stringify(req.body.bus_stops)
        })
        .del()
        .then((request)=>{
          res.status(200).json({status: 'sucess'})
          logger.info(request)
        })
        .catch((error) =>{
          res.status(500).json({status: 'Failed'})
          logger.error(error.message)
        })

    }catch(error){
      res.status(400).json({"Missing": "Parameter"})
      logger.error(error.message)
    }
   }
}


module.exports = new Ways()