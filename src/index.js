const app = require('./infra/server');
const {pool} = require('./database/db_con');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const bodyParser = require('body-parser');

// informando que usarei o body-parser
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
    // check api_key in header request
    if(req.headers.api_key == process.env.API_KEY){
      // check if body with parameter exists 
      if(req.body.rota === "" || req.body.rota === undefined){
        res.status(400).json({"Missing":"Parameter"})
      }
      else{
          pool.query("CREATE TABLE IF NOT EXISTS "+req.body.rota+" (user_id serial PRIMARY KEY,saida VARCHAR ( 50 ) UNIQUE NOT NULL,chegada VARCHAR ( 50 ) UNIQUE NOT NULL,semanal BOOLEAN NOT NULL,sabado BOOLEAN NOT NULL,domingo BOOLEAN NOT NULL);", (error, results) =>{
          if(error){
            console.log(error);
          } else{
            res.status(200).json("Nova rota criada com sucesso!")
          }
        })
      }
    }
    else{
      res.status(400).json("Error!")
    }
});


// Deletando uma nova rota existente
app.post('/api/v1/rotas/delete', function(req, res){
  // check api_key in header request
  if(req.headers.api_key == process.env.API_KEY){
    // check if body with parameter exists 
    if(req.body.rota === "" || req.body.rota === undefined){
      res.status(400).json({"Missing":"Parameter"})
    }
    else{
        pool.query("DROP TABLE IF EXISTS "+req.body.rota, (error, results) =>{
        if(error){
          console.log(error);
        } else{
          res.status(200).json("Rota deletada com sucesso!")
        }
      })
    }
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
});

// Criado horario de onibus
app.post('/api/v1/horarios/delete', function(req, res){
  if(req.headers.api_key == process.env.API_KEY){
        pool.query("delete from "+req.body.rota+" ml_sjc where id = "+req.body.id+";",  (error, results) => {
        if (error) {
          console.log(error);
          res.status(400).json('Error')
        }else{
          res.status(400).json('Rota deletada com sucesso!')
        }})
  }
  else{
     res.status(400).json({"Missing":"Parameters"});
  }
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

app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
