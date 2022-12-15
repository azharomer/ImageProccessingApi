"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageController_1 = __importDefault(require("../../controls/imageController"));
const ResizeImage_1 = require("../middlewares/ResizeImage");
const ImagesRoute = express_1.default.Router();
ImagesRoute.get('/', imageController_1.default.getAllImages);
ImagesRoute.get('/resize', ResizeImage_1.validateUrlParams, imageController_1.default.resizeImage);
exports.default = ImagesRoute;
