"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./../index"));
describe('1- check server End Points work ', () => {
    it('should return status 200 when call /', () => {
        (0, supertest_1.default)(index_1.default).get('/').expect(200);
    });
    it('should retun status 200 with images list when call /api/images', () => {
        (0, supertest_1.default)(index_1.default).get('/api/images').expect(200);
    });
});
