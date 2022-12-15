import request from 'supertest';
import app from '../../../index';

describe('2- check resize End Point', (): void => {
  it('should get status 400 if you does not send params', (): void => {
    request(app).get('/api/images/resize').expect(400);
  });

  it('should get status 400 if send wrong imagename like test', (): void => {
    request(app).get('/api/images/resize?imagename=test').expect(400);
  });

  it('should get status 400 if you send imagename  with extension like test.jpg', (): void => {
    request(app).get('/api/images/resize?imagename=test.jpg').expect(400);
  });

  it('should get status 400 if any params missed ', (): void => {
    request(app).get('/api/images/resize?width=100&height=200').expect(400);
  });

  it('should get status 400 if send width or height negative ', (): void => {
    request(app)
      .get('/api/images/resize?imagename=fjord&width=100&height=-200')
      .expect(400);
  });

  it('should get status 200 if send all params correct ', (): void => {
    request(app)
      .get('/api/images/resize?imagename=fjord&width=100&height=200')
      .expect(200);
  });
  it('should get status 400 if send all params correct but image not exist in folder ', (): void => {
    request(app)
      .get('/api/images/resize?imagename=fjordh&width=100&height=200')
      .expect(400);
  });
});
