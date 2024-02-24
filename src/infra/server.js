const express = require('express');
const cors = require('cors');
const expressLogger = require('../middleware/loggerExpress.js')
const app = express();

// Routes
const indexRoutes = require('../routes/index/indexRoutes.js');
const actautorRoutes = require('../routes/actuator/actuatorRoutes.js');
const itinerariesRoutes = require('../routes/itineraries/itinerariesRoutes.js');
const schedulerRoutes = require('../routes/schedules/schedulesRoutes.js');

// configs
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger.json');
const bodyParser = require('body-parser');
const corsOptions = require('../middleware/corsConfig.js');

// Security config
app.disable("x-powered-by");
app.use(expressLogger);
app.use(cors(corsOptions));
app.use(bodyParser.json());




// calling my routes
app.use(indexRoutes);
app.use(actautorRoutes);
app.use(itinerariesRoutes);
app.use(schedulerRoutes);
app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));


module.exports = app;