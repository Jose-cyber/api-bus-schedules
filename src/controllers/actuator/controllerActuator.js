const knex = require('../../database/config.js');
const logger = require('../../configs/logger.js');

class Health {
    actuator(req, res){
        knex.raw("SELECT 1").then(() => {
            res.json({status: "UP"}).status(200);
        })
        .catch((error) => {
            res.status(500).json({status: "DOWN"})
            logger.error(error);
        });
    }
}

module.exports = Health;