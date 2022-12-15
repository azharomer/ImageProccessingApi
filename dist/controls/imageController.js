"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const ImageModule_1 = require("../utilities/ImageModule");
const validateImage_1 = __importDefault(require("../utilities/validateImage"));
const sharp_1 = __importDefault(require("sharp"));
const fs = __importStar(require("fs-extra"));
const resizeImage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield validateImage_1.default.checkResizeDirExist();
    const ImageObj = new ImageModule_1.ResizeImage(req.query.imagename, parseInt(req.query.height), parseInt(req.query.width));
    const checkImageExist = yield validateImage_1.default.checkImageResize({
        imageName: ImageObj.imageName,
        height: ImageObj.height,
        width: ImageObj.width,
    });
    if (!checkImageExist) {
        const createImage = yield createResizeImage(ImageObj);
        createImage
            ? res.status(200).sendFile(ImageObj.distDir())
            : res.status(500).send('something wronge Try again');
    }
    else {
        res.status(200).sendFile(checkImageExist);
    }
});
const getAllImages = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = fs.readdirSync(ImageModule_1.ImageDir);
    const result = files
        .map((file) => {
        const fileName = file.split('.')[0];
        return `<h4><a href="/api/images/resize?imagename=${fileName}&width=100&height=100">${file}</a></h4>`;
    })
        .join(' ');
    res.status(200).send(result);
});
const createResizeImage = (imageObject) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imgSource = imageObject.sourceDir();
        const imgDist = imageObject.distDir();
        yield (0, sharp_1.default)(imgSource)
            .resize(imageObject.width, imageObject.height)
            .toFormat('jpeg')
            .toFile(imgDist);
        return true;
    }
    catch (_a) {
        return false;
    }
});
exports.default = {
    getAllImages,
    resizeImage,
};
