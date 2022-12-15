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
const fs = __importStar(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const ImageModule_1 = require("../utilities/ImageModule");
const checkImageExist = (imageUrl) => __awaiter(void 0, void 0, void 0, function* () { return yield fs.pathExists(imageUrl); });
const validateImageName = (imageName) => __awaiter(void 0, void 0, void 0, function* () {
    const imageUrl = `${path_1.default.resolve(ImageModule_1.ImageDir, `${imageName}.jpg`)}`;
    const checkExist = yield checkImageExist(imageUrl);
    return checkExist;
});
const validateNameWithoutExtension = (imageName) => {
    const imageWithExtan = imageName.split('.');
    return imageWithExtan.length > 1 ? false : true;
};
const validateImageHeight = (imageHeight) => imageHeight && imageHeight > 0 ? true : false;
const validateImageWidth = (imageWidth) => imageWidth && imageWidth > 0 ? true : false;
const checkImageResize = (imageObject) => __awaiter(void 0, void 0, void 0, function* () {
    const imageUrl = `${path_1.default.resolve(ImageModule_1.ResizeDir, `${imageObject.imageName}_${imageObject.height}_${imageObject.width}.jpg`)}`;
    const checkExist = yield checkImageExist(imageUrl);
    return checkExist ? imageUrl : false;
});
const checkResizeDirExist = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield fs.access(ImageModule_1.ResizeDir);
    }
    catch (_a) {
        yield fs.mkdir(ImageModule_1.ResizeDir);
    }
});
exports.default = {
    validateImageName,
    validateImageHeight,
    validateImageWidth,
    checkImageResize,
    checkResizeDirExist,
    validateNameWithoutExtension,
};
