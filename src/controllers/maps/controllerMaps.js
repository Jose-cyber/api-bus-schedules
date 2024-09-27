const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');

// schemas
const listQueryParamSchema = require('../../schemas/maps/listQueryParamSchema.js')
const createUpdateDeleteMapsSchema = require('../../schemas/maps/createUpdateDeleteMapsSchema.js')

class Maps {
    list(req, res){
      let reqParamValidator = listQueryParamSchema.validateSync(req.query, {stripUnknown: true})
      try{
        knex
        .select()
        .where(reqParamValidator)
        .from('maps')
        .then((result)=>{
            res.status(200).json({maps: result})
        })
       }
       catch(error){
        res.status(400).json({status: 'failed'})
        logger.error(error.message)
       }
    }
    create(req, res){
    try{
      createUpdateDeleteMapsSchema.validateSync(req.body)
      
      knex
        .insert([{
          maps_name: req.body.maps_name,
          link: req.body.link
        }])
        .into('maps')
        .then((request)=>{
          res.status(201).json({
            status: 'sucess'
          })
          logger.info(request)
        })
        .catch((error)=>{
           res.status(500).json({
            status: 'failed'
           })
           logger.error(error.message)
        })

    }catch(error){
      res.status(400).json({status: 'failed'})
      logger.error(error.message)
    }
      
    }
    update(req, res){
      try{
        createUpdateDeleteMapsSchema.validateSync(req.body)

        knex('maps')
        .where({
          maps_name: req.body.maps_name,
        })
        .update({
          link: req.body.link
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
        res.status(400).json({status: 'failed'})
        logger.error(error.message)
      }
    }
    delete(req, res){
      try{
        createUpdateDeleteMapsSchema.validateSync(req.body)

        knex('maps')
        .where({
          maps_name: req.body.maps_name,
          link: req.body.link
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
        res.status(400).json({status: 'failed'})
        logger.error(error.message)
      }
    }

    
}

module.exports = new Maps