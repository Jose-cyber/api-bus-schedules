const config = require('../../knexfile.js');
const logger = require('../configs/logger.js')
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[environment])
require('dotenv').config()

if (process.env.DB_MIGRATION === 'true') {
    try {
        // run migrations
        knex.migrate.up(config[environment]);
        logger.info('Database migrations applied successfully.');
        
        // run seeds
        knex.seed.run(config[environment]);
        logger.info('Database seeds executed successfully.');
    } catch (error) {
        logger.error(error.message);
        throw error; // Re-throw to halt execution if necessary
    }
}



module.exports = knex;