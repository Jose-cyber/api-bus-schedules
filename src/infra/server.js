const express = require('express');
const indexRoutes = require('../routes/indexRoutes.js')
const actautorRoutes = require('../routes/actuatorRoutes.js')
const itinerariesRoutes = require('../routes/itinerariesRoutes.js')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../doc/swagger_output.json');
const bodyParser = require('body-parser');
const app = express();

// Security config
app.disable("x-powered-by");

// Using body-parser
app.use(bodyParser.json());

// calling my routes
app.use(indexRoutes);
app.use(actautorRoutes);
app.use(itinerariesRoutes)

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))


module.exports = app;