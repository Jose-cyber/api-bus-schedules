require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    },
    pool: {
      min: 10,
      max: 20
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/migrations/",
    },
    seeds: {
      directory: 'src/seeds',
  },
  debug: process.env.DB_DEBUG,
  },

  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      charset: 'utf8',
      ssl: process.env.DB_SSL,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: "src/migrations/",
    },
    seeds: {
      directory: 'src/seeds',
  },
  debug: process.env.DB_DEBUG
  }

};
