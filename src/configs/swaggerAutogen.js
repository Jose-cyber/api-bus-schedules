const swaggerAutogen = require('swagger-autogen')();
const outputFile = '../docs/swagger.json';
const endpointsFiles = ['../infra/server.js'];
require('dotenv').config();

const doc = {
  info: {
    version: '1.0.0',
    title: 'api-bus-schedules',
    description: 'Simple api to manage and control itineraries and schedules of bus service.',
  },
  host: process.env.APP_HOST,
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Itineraries',
      description: 'Endpoints',
    },
    // ... other tags
  ],
  definitions: {
    itineraries: {
      type: 'object', // Define the model type
      properties: {
        id: {
          type: 'integer',
          example: 1,
        },
        name: {
          type: 'string',
          example: 'ml_sjc',
        },
        alias: {
          type: 'string',
          example: 'Monteiro Lobato x São José dos Campos',
        },
      },
    },
    // ... other definitions
  },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require('../index.js');
});