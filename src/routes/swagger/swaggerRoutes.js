const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../../docs/swagger.json');

const swaggerRoutes = express.Router();

// const middlewares
const disableSwaggerInProduction = require('../../middlewares/disableSwagger.js')

swaggerRoutes.use('/api-bus-schedules/docs', disableSwaggerInProduction, swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = swaggerRoutes;