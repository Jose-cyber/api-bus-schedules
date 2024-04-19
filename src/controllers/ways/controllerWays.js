const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');
const listQueryParamSchema = require('../../schemas/ways/listWaySchema.js')

class ControllerWays{
    create(){

    }
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
          logger.error(error.message)
          return res.status(500).json({})
        })
      }
      catch(error){
        return res.status(400).json({"Missing": "Parameter"})
      }
   }
    delete(){

    }

}


module.exports = ControllerWays