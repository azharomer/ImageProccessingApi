import express, { Router } from 'express';
import imageController from '../../controls/imageController';
import { validateUrlParams } from '../middlewares/ResizeImage';

const ImagesRoute: Router = express.Router();

ImagesRoute.get('/', imageController.getAllImages);

ImagesRoute.get('/resize', validateUrlParams, imageController.resizeImage);

export default ImagesRoute;
