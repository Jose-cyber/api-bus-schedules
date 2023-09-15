const express = require('express');
const ControllerItineraries = require('../controllers/controllerItineraries')
const Itineraries = new ControllerItineraries
const itinerariesRoutes = express.Router();


itinerariesRoutes
    .route('/api/v1/itinerarios')
    .get(Itineraries.list)

itinerariesRoutes
    .route('/api/v1/itinerarios/create')
    .post(Itineraries.create)
    
itinerariesRoutes
    .route('/api/v1/itinerarios/delete')
    .delete(Itineraries.delete)

module.exports = itinerariesRoutes;