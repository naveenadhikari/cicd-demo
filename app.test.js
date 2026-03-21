const request = require('supertest');
const app = require('./app');

test('Homepage returns ok status', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('ok');
});

test('Health check returns healthy', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('healthy');
});