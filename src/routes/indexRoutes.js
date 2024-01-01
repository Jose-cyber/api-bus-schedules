const express = require('express');
const Index = require('../controllers/index/controllerIndex.js')
const IndexController = new Index
const indexRoutes = express.Router();


indexRoutes
    .route('/')
    .get(IndexController.index)

    
module.exports = indexRoutes;