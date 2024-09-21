const express = require('express');
const cors = require('cors');
const app = express();

// Routes
const itinerariesRoutes = require('../routes/itineraries/itinerariesRoutes.js');
const schedulerRoutes = require('../routes/schedules/schedulesRoutes.js');
const waysRoutes = require('../routes/ways/waysRoutes.js')
const healthRoutes = require('../routes/health/HealthRoutes.js');
const mapsRoutes = require('../routes/maps/mapRoutes.js');
const swaggerRoutes = require('../routes/swagger/swaggerRoutes.js')

// configs
const bodyParser = require('body-parser');
const expressLogger = require('../middlewares/loggerExpress.js')
const corsOptions = require('../middlewares/corsConfig.js');
const prometheusMiddleware = require('../middlewares/prometheusMetrics.js');
const authRoutes = require('../routes/auth/authRoutes.js');



// Security config
app.disable("x-powered-by");
app.use(expressLogger);
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(authRoutes)

// calling my routes
app.use(healthRoutes);
app.use(itinerariesRoutes);
app.use(schedulerRoutes);
app.use(waysRoutes)
app.use(mapsRoutes)

//metrics and docs
app.use(swaggerRoutes);
app.use(prometheusMiddleware)

module.exports = app;