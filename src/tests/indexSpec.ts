import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test images endpoint', () => {
  it('request sucess', async () => {
    const response = await request.get('/api?name=img1.jpg&w=100&h=200');

    expect(response.type).toEqual('image/jpeg');
    expect(response.statusCode).toEqual(200);
  });

  it('return original image ig now width or height exist', async () => {
    const response = await request.get('/api?name=img1.jpg');

    expect(response.statusCode).toEqual(200);
    expect(response.type).toEqual('image/jpeg');
  });
  
});

describe('end point failuer', () => {
  it('can not open end point without name', async () => {
    const response = await request.get('/api');

    expect(response.statusCode).toEqual(404);
  });
});
