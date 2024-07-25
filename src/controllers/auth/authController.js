const jwt = require('jsonwebtoken');
require('dotenv').config()


async function auth(req, res){
    try {
        // Extraindo e decodificando o header de autorização
        const [, hash] = req.headers.authorization.split(' ');
        const [username, password] = Buffer.from(hash, 'base64').toString().split(':');
        
        // Verificando se o username e password são corretos
        if (username !== process.env.USERNAME && password !== process.env.PASSWORD){
          return res.status(401).json({ error: 'Authentication failed' });
        }
    
        // Gerando o token JWT
        const token = jwt.sign({ username: process.env.USERNAME }, process.env.PRIVATE_KEY, {
          expiresIn: '1h',
        });
    
        // Respondendo com o token
        res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error: 'Login failed' });
    }
}

module.exports = auth