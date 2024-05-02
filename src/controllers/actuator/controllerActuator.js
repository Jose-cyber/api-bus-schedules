const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');

class Health {
    actuator(req, res){
        knex.raw("SELECT 1").then(() => {
            res.status(200).json({status: "UP"});
        })
        .catch((error) => {
            res.status(500).json({status: "DOWN"})
            logger.error(error.message);
        });
    }
}

module.exports = Health;