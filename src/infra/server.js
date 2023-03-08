const express = require("express");

// Instanciando o express
const app = express();

// Instanciado o webserver
app.listen(process.env.PORT || 8080, function(){
    console.log('Server Runing')
})

// exportando a constante app
module.exports = app
