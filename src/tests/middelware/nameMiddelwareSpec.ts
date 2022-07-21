import nameMiddelWare from '../../middelware/nameMiddelware';
import supertest from 'supertest';
import app from '../../index';

const request = supertest(app);

describe('name middelware', () => {
  it('move to function if name param exist', async () => {
    const response = await request.get('/api?name=img1.jpg');

    expect(response.status).toBe(200);
  });

  it('return not found if name paramter was not send', async () => {
    const response = await request.get('/api');

    expect(response.status).toBe(404);
  });
});
