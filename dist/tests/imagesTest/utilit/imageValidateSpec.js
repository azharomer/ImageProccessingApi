"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validateImage_1 = __importDefault(require("./../../../utilities/validateImage"));
describe('3- check image validation', () => {
    it('check image name exist or not', () => __awaiter(void 0, void 0, void 0, function* () {
        const imageName = 'fjord';
        expect(yield validateImage_1.default.validateImageName(imageName)).toBeTrue();
    }));
    it('check if image  fjord_100_200  exists or not', () => __awaiter(void 0, void 0, void 0, function* () {
        const imageObg = { imageName: 'fjord', height: 200, width: 200 };
        expect(yield validateImage_1.default.checkImageResize(imageObg)).toBeFalsy();
    }));
});
