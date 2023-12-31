const express = require('express');
const ControllerItineraries = require('../controllers/itineraries/controllerItineraries')
const Itineraries = new ControllerItineraries
const itinerariesRoutes = express.Router();


itinerariesRoutes
    .route('/api/v1/itinerarios/list')
    .get(Itineraries.list)

itinerariesRoutes
    .route('/api/v1/itinerarios/create')
    .post(Itineraries.create)
    
itinerariesRoutes
    .route('/api/v1/itinerarios/delete')
    .delete(Itineraries.delete)

itinerariesRoutes
    .route('/api/v1/itinerarios/edit')
    .patch(Itineraries.edit)


module.exports = itinerariesRoutes;