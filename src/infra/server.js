const express = require('express');
const cors = require('cors');
const expressLogger = require('../middlewares/loggerExpress.js')
const app = express();

// Routes
const indexRoutes = require('../routes/index/indexRoutes.js');
const actautorRoutes = require('../routes/actuator/actuatorRoutes.js');
const itinerariesRoutes = require('../routes/itineraries/itinerariesRoutes.js');
const schedulerRoutes = require('../routes/schedules/schedulesRoutes.js');
const waysRoutes = require('../routes/ways/waysRoutes.js')

// configs
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger.json');
const bodyParser = require('body-parser');
const corsOptions = require('../middlewares/corsConfig.js');
const prometheusMiddleware = require('../middlewares/prometheusMetrics.js')

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
app.use(waysRoutes)

//metrics and docs
app.use('/api-bus-schedules/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(prometheusMiddleware)

module.exports = app;