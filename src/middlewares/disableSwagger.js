require('dotenv').config()

const environment = process.env.NODE_ENV || 'development';

module.exports = function disableSwaggerInProduction(req, res, next) {
    if(environment == 'production'){
        return res.status(404)
    }

    next()
}