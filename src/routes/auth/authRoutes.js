const express = require('express');
const authRoutes = express.Router();

// controler
const auth = require('../../controllers/auth/authController')

authRoutes
  .route('/api-bus-schedules/login',)
  .post(auth, ()=>{
    // #swagger.tags = ['Authentication']
    // #swagger.description = 'Recebe um nome de usuário e senha via autenticação básica e retorna um token JWT'
    
    /* #swagger.security = [{
        "basicAuth": []
    }] */

    /* #swagger.responses[200] = {
        description: 'Sucesso ao fazer login',
        schema: {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        }
    } */
    
    /* #swagger.responses[401] = {
        description: 'Credenciais inválidas',
        schema: {
          "error": "Credenciais inválidas"
        }
    } */
    
    /* #swagger.responses[500] = {
        description: 'Erro interno do servidor',
        schema: {
          "error": "Erro interno do servidor"
        }
    } */
      

  })

module.exports = authRoutes;