const express = require('express');
const schedulesRoutes = express.Router();


schedulesRoutes
    .route('/')
    .get()

schedulesRoutes
    .route('/api/v1/health')
    .get()



module.exports = schedulesRoutes;