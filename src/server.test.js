'use strict';

const app = require('../src/server.js').app;
const supertest = require('supertest');
const request = supertest(app);

describe('Validator Middleware', () => {
  test('Should return a 400 when no name is present in query for /person route', async () => {
    const response = await request.get('/person');
    expect(response.status).toEqual(400);
    expect(response.text).toContain('Name is required');
  });

  test('Should succeed with a 200 status when name is provided for /person route', async () => {
    const response = await request.get('/person?name=John');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({ name: 'John' });
  });
});
