const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');
const listQueryParamSchema = require('../../schemas/maps/listQueryParamSchema.js')

class Maps{
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

       }
      
    }
    
}


const maps = new Maps

module.exports = maps