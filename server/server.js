import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import swaggerUi from 'swagger-ui-express';
import dotenv from 'dotenv';
import eventRoutes from './routes/event-route';
import centerRoutes from './routes/center-route';
import userRoutes from './routes/user-routes';
import swaggerDoc from './doc/swagger.json';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;


app.set('secret_key', process.env.SECRET_KEY);

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
eventRoutes(app);
centerRoutes(app);
userRoutes(app);

app.use('/api', (req, res) => {
  res.status(200).send('This is EventManager');
});

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/', (req, res) => {
  res.status(200).send('Hey There, welcome to Event Manager');
});

app.get('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
