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
exports.validateUrlParams = void 0;
const validateImage_1 = __importDefault(require("../../utilities/validateImage"));
const validateUrlParams = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const height = req.query.height
        ? Number(req.query.height)
        : 0;
    const width = req.query.width ? Number(req.query.width) : 0;
    const imageName = req.query.imagename;
    const validateNameExtension = validateImage_1.default.validateNameWithoutExtension(imageName);
    if (!validateNameExtension) {
        return res.status(400).send('please write imagename without extensions');
    }
    const validateName = yield validateImage_1.default.validateImageName(imageName);
    const validateHeight = validateImage_1.default.validateImageHeight(height);
    const validateWidth = validateImage_1.default.validateImageWidth(width);
    if (!validateName) {
        return res
            .status(400)
            .send('Image Not Exist ,Please use Valid ImagName in imagename field');
    }
    if (!validateHeight) {
        return res.status(400).send('please add valid height value');
    }
    if (!validateWidth) {
        return res.status(400).send('please add valid width value');
    }
    next();
});
exports.validateUrlParams = validateUrlParams;
