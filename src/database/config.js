const config = require('../../knexfile.js');
const logger = require('../configs/logger.js')
const environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(config[environment])
require('dotenv').config()

const run ={
    migration: process.env.DB_MIGRATION || false,
    seeds: process.env.DB_SEEDS || false
}

async function runMigrationsAndSeeds() {
    if (run.migration === 'true') {
        try {
            // Run migrations
            await knex.migrate.up(config[environment]);
            logger.info('Database migrations applied successfully.');            
        } catch (error) {
            logger.error(`Error applying migrations: ${error.message}`);
        }
    }

    if (run.seeds === 'true'){
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