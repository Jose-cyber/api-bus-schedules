const knex = require('../database/config.js');
const logger = require('../configs/logger.js')
const createItinerariesSchema = require('../schemas/createItinerariesSchema.js')
const deleteItinerariesSchema = require('../schemas/deleteItinerariesSchema.js')

class ControllerItineraries{
    list(req, res){
        knex
            .select()
            .from('itinerarios')
            .then((query_result) => {
                res.status(200).json(query_result)
                logger.info(query_result)
                
            })
            .catch((error) => {
                res.status(500).json('Error')
                logger.error(error);
            });
    }
    create(req, res){
        try {
            createItinerariesSchema.validateSync(req.body);

            knex
            .insert([ 
                {
                    name: req.body.name,
                    alias: req.body.alias
                }
            ])
            .into('itinerarios')
            .timeout(1000)
            .then((query_result)=>{
                res.status(201).json({ status: 'Success!'})
                logger.info(query_result)
            })
            .catch((error) => {
                res.status(500).json({status: 'Failed'})
                logger.error(error)
            })
        }
        catch(error){
            res.status(400).json({ Missing: 'Parameters'});
            logger.error(error);
        } 
    }
    delete(req, res){
        try{
            deleteItinerariesSchema.validateSync(req.body, { abortEarly: false });
            knex('itinerarios')
              .del()
              .where({
                id: req.body.id,
                name: req.body.name,
                alias: req.body.alias
              })
              .timeout(1000)
              .then(() => {
                res.status(200).json({ status: 'Success!', message: "Register {'id': "+req.body.id+"'name': "+ req.body.name+"'alias': "+req.body.alias+"} deleted successfully." })
                logger.info({ status: 'Success!', message: "Register {'id': "+req.body.id+"'name': "+ req.body.name+"'alias': "+req.body.alias+"} deleted successfully." })
            })
            .catch((error) =>{
                res.status(500).json({ status: 'Failed'})
                logger.error(error);
            })
        }
        catch(err){
            return res.status(400).json({ Missing: 'Parameters'});
        }

    }

}

module.exports = ControllerItineraries;