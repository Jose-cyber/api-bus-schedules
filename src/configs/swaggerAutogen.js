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
    {
      name: 'Schedules',
      description: 'Endpoints',
    },
    {
      name: 'Actuator',
      description: 'Endpoints',
    },
    {
      name: 'Index',
      description: 'Endpoints',
    }
  ],
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
        id: 8,
        alias: "sjc_sp",
        name: "São José dos Campos X São Paulo",
        update: {
          name: "sjc_mgc",
          alias: "São José dos Campos X mogi das cruzes" 
        }
    },
    schedulesCreate:{
        itinerario: "sjc_spj",
        saida: "00:00",
        chegada: "00:30",
        semanal: true,
        sabado: false,
        domingo: false
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

const generateSwagger = () => {
  swaggerAutogen(outputFile, endpointsFiles, doc);
};

generateSwagger();

module.exports = generateSwagger;