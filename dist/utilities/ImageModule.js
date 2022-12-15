"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResizeImage = exports.ResizeDir = exports.ImageDir = void 0;
const path_1 = __importDefault(require("path"));
exports.ImageDir = path_1.default.resolve(__dirname, '../../assets/images');
exports.ResizeDir = path_1.default.resolve(__dirname, '../../assets/resize');
class ResizeImage {
    constructor(imageName, width, height) {
        this.imageName = imageName;
        this.width = width;
        this.height = height;
    }
    sourceDir() {
        const imagePath = `${path_1.default.resolve(exports.ImageDir, `${this.imageName}.jpg`)}`;
        return imagePath;
    }
    distDir() {
        const imagePath = path_1.default.resolve(exports.ResizeDir, `${this.imageName}_${this.height}_${this.width}.jpg`);
        return imagePath;
    }
}
exports.ResizeImage = ResizeImage;
