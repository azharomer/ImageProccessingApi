import express, { Application } from 'express';
import routes from './routes';
import * as env from 'dotenv';
import morgan from 'morgan';
env.config();

const PORT: number = (process.env.PORT as unknown as number) || 3000;
const app: Application = express();

app.use(morgan('dev'));
app.use('/', routes);

app.listen(PORT, (): void => {
  console.log(`server started at http://localhost:${PORT}`);
});

export default app;
