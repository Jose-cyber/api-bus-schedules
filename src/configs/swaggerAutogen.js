const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
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
      name: 'Authentication',
      description: 'Endpoints',
    },
    {
      name: 'Itineraries',
      description: 'Endpoints',
    },
    {
      name: 'Schedules',
      description: 'Endpoints',
    },
    {
      name: 'Ways',
      description: 'Endpoints',
    },
    {
      name: 'Maps',
      description: 'Endpoints',
    },
    {
      name: 'Health',
      description: 'Endpoints',
    },
  ],
  components: {
    securitySchemes: {
      basicAuth: {
        type: 'http',
        scheme: 'basic'
      }, 
      bearerAuth: {
        type: 'http',
        scheme: 'bearer'
      }
    }
  },
  definitions: {
    itinerariesCreate: {
        name: "sjc_sp",
        alias: "São José dos Campos X São Paulo"
    },
    itinerariesDelete:{
        id: 7,
        name: "sjc_sp",
        alias: "São José dos Campos X São Paulo"
    },
    itinerariesEdit:{
      id: 66,
      name: "sjc_sp",
      alias: "São José dos Campos X São Paulo",
      update: {
        name: "sjc_sp",
        alias: "São José dos Campos X São Paulo(capital)" 
      }
    },
    schedulesCreate:{
      start: "05:30:00",
      end: "06:30:00",
      weekly: true,
      saturday: false,
      sunday: false,
      come_from_sfx: false,
      to_sfx: false,
      itineraries_name: "ml_sjc",
      itineraries_alias: "Monteiro Lobato x São José dos Campos"
    },
    schedulesDelete:{
      id: 45,
      saida: "06:40:00",
      chegada: "07:40:00",
      semanal: true,
      sabado: false,
      domingo: false,
      itinerario: "ml_sjc"
    },
    schedulesEdit:{
        id: 45,
        saida: "06:40:00",
        chegada: "07:40:00",
        semanal: true,
        sabado: false,
        domingo: false,
        itinerario: "ml_sjc"
    }    
  },
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../index.js')
})
