import app from '../index' ;
import supertest from 'supertest';

const req = supertest(app);

describe('Test end point response',()=>{
  it('gets the api end point', async ()=>{
    const response = await req.get('/api');
    expect(response.status).toBe(200);
  });

  it('gets images end point', async ()=>{
    const response = await req.get('/api/images');
    expect(response.status).toBe(200);
  });

});