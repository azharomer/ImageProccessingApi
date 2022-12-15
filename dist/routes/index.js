"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ImagesResize_1 = __importDefault(require("./api/ImagesResize"));
const routes = express_1.default.Router();
routes.use('/api/images', ImagesResize_1.default);
routes.get('/', (_req, res) => {
    res
        .status(200)
        .setHeader('Content-Type', 'text/html')
        .sendFile(path_1.default.join(__dirname, '../', '/index.html'));
});
exports.default = routes;
