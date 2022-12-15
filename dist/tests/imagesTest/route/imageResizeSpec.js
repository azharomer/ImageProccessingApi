"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../../../index"));
describe('2- check resize End Point', () => {
    it('should get status 400 if you does not send params', () => {
        (0, supertest_1.default)(index_1.default).get('/api/images/resize').expect(400);
    });
    it('should get status 400 if send wrong imagename like test', () => {
        (0, supertest_1.default)(index_1.default).get('/api/images/resize?imagename=test').expect(400);
    });
    it('should get status 400 if you send imagename  with extension like test.jpg', () => {
        (0, supertest_1.default)(index_1.default).get('/api/images/resize?imagename=test.jpg').expect(400);
    });
    it('should get status 400 if any params missed ', () => {
        (0, supertest_1.default)(index_1.default).get('/api/images/resize?width=100&height=200').expect(400);
    });
    it('should get status 400 if send width or height negative ', () => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/images/resize?imagename=fjord&width=100&height=-200')
            .expect(400);
    });
    it('should get status 200 if send all params correct ', () => {
        (0, supertest_1.default)(index_1.default)
            .get('/api/images/resize?imagename=fjord&width=100&height=200')
            .expect(200);
    });
    // it('should get status 400 if send all params correct but image not exist in folder ', (): void => {
    //   request(app)
    //     .get('/api/images/resize?imagename=fjordh&width=100&height=200')
    //     .expect(400);
    // });
});
