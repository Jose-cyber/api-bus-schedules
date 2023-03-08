const request = require('supertest')
const app = require("../index.js")

// testando todas as rotas http
describe('Testanto rotas:', () =>{
  it('rota: /', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
  })
})
