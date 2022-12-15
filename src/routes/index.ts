import express, { Request, Response, Router } from 'express';
import path from 'path';
import ImagesRoute from './api/ImagesResize';

const routes: express.Router = express.Router();

routes.use('/api/images', ImagesRoute);

routes.get('/', (_req: Request, res: Response): void => {
  res
    .status(200)
    .setHeader('Content-Type', 'text/html')
    .sendFile(path.join(__dirname, '../', '/index.html'));
});

routes.get('*', (_req: Request, res: Response): void => {
  res.send('<h2> Page Not Found</h2>');
});

export default routes;
