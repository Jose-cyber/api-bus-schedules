const express = require("express");
const bodyParser = require('body-parser');
const Pool = require("pg").Pool
const dotenv = require("dotenv")
dotenv.config()


const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})

// Instanciando o express e informando que usarei o body-parser
const app = express();
app.use(bodyParser.json())

// REST API
app.get('/', function(req, res){
    res.send('Horarios de onibus - API');
});

// Exibindo todas as rotas
app.get('/api/v1/rotas', function(req, res){
  pool.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;", (error, results) => {
    if (error) {
      res.status(500).json('Error')
      console.log(error);
    } 
    else{
      const list = results.rows.map(table => table.table_name);
      res.status(200).json(list)
    }
    });
});

// Criando uma nova rota
app.post('/api/v1/rotas/create', function(req, res){
    if(req.headers.api_key == process.env.API_KEY){
      console.log(req.body.route);
    }
    else{
      res.status(400).json("Error!")
    }
});


// Deletando uma nova rota existente
app.post('/api/v1/rotas/delete', function(req, res){
  if(req.headers.api_key == process.env.API_KEY){
    console.log(req.body.route);
  }
  else{
    res.status(400).json("Error!")
  }
});


// pegando todos os horarios
app.get('/api/v1/horarios/:rota', function(req, res){
  pool.query("SELECT * FROM "+req.params.rota, (error, results) => {
    if (error) {
      res.status(400).json("Por favor informe uma rota valida!")
    } 
    else{
      res.status(200).json(results.rows)
    }
    })
});

// Criado horario de onibus
app.post('/api/v1/horarios/create', function(req, res){
   if(req.headers.api_key == process.env.API_KEY){
      res.status(500).json('OK header');
   }
   else{
      res.status(400).json({"Missing":"Parameters"});
   }
   //console.log(JSON.stringify(req.headers.api_key))
});

// Criado horario de onibus
app.post('/api/v1/horarios/delete', function(req, res){
  if(req.headers.api_key == process.env.API_KEY){
     res.status(500).json('OK header');
  }
  else{
     res.status(400).json({"Missing":"Parameters"});
  }
  //console.log(JSON.stringify(req.headers.api_key))
});

// Actuator to test api connection with database
app.get('/api/v1/actuator/health', function(req, res){
  pool.connect((error, results) => {
    if(error){
      res.status(500).json({"status":"DOWN"});
      console.log(error);
    }
    else{
      res.status(200).json({"status":"UP"});
      console.log('DB_connection: '+results._connected);
    }
  });
});


app.listen(process.env.PORT || 3000, function(){
  console.log('Server Runing')
})