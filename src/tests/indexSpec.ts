import request from 'supertest';
import app from './../index';
describe('1- check server End Points work ', (): void => {
  it('should return status 200 when call /', (): void => {
    request(app).get('/').expect(200);
  });
  it('should retun status 200 with images list when call /api/images', (): void => {
    request(app).get('/api/images').expect(200);
  });
});
