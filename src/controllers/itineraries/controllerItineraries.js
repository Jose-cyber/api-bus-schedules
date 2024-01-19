const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');
const createItinerariesSchema = require('../../schemas/itineraries/createItinerariesSchema.js');
const deleteItinerariesSchema = require('../../schemas/itineraries/deleteItinerariesSchema.js');
const editItinerariesSchema = require('../../schemas/itineraries/editItinerariesSchema.js');

class ControllerItineraries {
    list(req, res){
        knex
            .select()
            .from('itinerarios')
            .then((query_result) => {
                res.status(200).json(query_result)
                logger.info(query_result)
            })
            .catch((error) => {
                res.status(500).json({ status: 'Error'})
                logger.error(error.message);
            })

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
            logger.error(error.message);
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
                logger.info({ status: 'Success!', message: "Register {'id': "+req.body.id+", 'name': "+ req.body.name+", 'alias': "+req.body.alias+" } deleted successfully." })
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
    edit(req, res){
        try{
            editItinerariesSchema.validateSync(req.body);
            knex('itinerarios')
                .where({
                    id: req.body.id
                })
                .update({
                    name: req.body.update.name,
                    alias: req.body.update.alias
                })
                .timeout(1000)
                .then(() => {
                    const responseTemplate = {
                        "Operation": "Sucess!",
                        "Action": "Update",
                        "Register": {
                            "name": req.body.name,
                            "alias": req.body.alias
                        },
                        "New Register":{
                            "name": req.body.update.name,
                            "alias": req.body.update.alias
                        }
                    }
                    res.status(200).json(responseTemplate)
                    logger.info(responseTemplate);
                })
                .catch((err) => {
                    logger.error('Erro ao atualizar o registro:', err);
                    res.status(400).json({"Operation": "Failed!","Action": "Update"})
                })
        }
        catch(error){
            console.log(error)
            res.status(400).json({ "Missing": 'Parameters'});
        }
    }
}  

module.exports = ControllerItineraries;