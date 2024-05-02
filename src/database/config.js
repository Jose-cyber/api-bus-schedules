const config = require('../../knexfile.js');
const logger = require('../configs/logger.js')
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[environment])
require('dotenv').config()

async function runMigrationsAndSeeds() {
    if (process.env.DB_MIGRATION === 'true') {
        try {
            // Run migrations
            await knex.migrate.up(config[environment]);
            logger.info('Database migrations applied successfully.');            
        } catch (error) {
            logger.error(`Error applying migrations: ${error.message}`);
        }
    }

    if (process.env.DB_SEEDS === 'true'){
        try{
            // Run seeds
            await knex.seed.run(config[environment]);
            logger.info('Database seeds executed successfully.');
        }
        catch (error) {
            logger.error(`Error applying seeds: ${error.message}`);
        }
    }
}

runMigrationsAndSeeds()


module.exports = knex;