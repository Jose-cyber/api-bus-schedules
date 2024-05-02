const request = require('supertest');
const app = require('../src/index')


jest.mock('knex', () => {
    return jest.fn(() => ({
      raw: jest.fn().mockRejectedValue(new Error('Database connection error')), // Simula o método 'raw' do Knex
      migrate: {
        up: jest.fn().mockResolvedValue() // Simula o método 'up' do Knex migrate
      },
      seed:{
        run: jest.fn().mockResolvedValue()
      },
      destroy: jest.fn().mockResolvedValue() // Simula o método 'destroy' do Knex
    }));
});
  
describe('Testing Actuator Route', () => {

  it('Testing method get in /api-bus-schedules/health with status 500', async () => {
    const response = await request(app).get('/api-bus-schedules/health');
    expect(response.text).toBe("{\"status\":\"DOWN\"}");
    expect(response.status).toBe(500);
  });
});