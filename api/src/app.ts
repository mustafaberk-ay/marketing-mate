import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { chatThreadRouter } from './routes/chatThreadRoute';
import { imageGenerationRouter } from './routes/imageGenerationRoute';

dotenv.config();
const app: Application = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/chatThread', chatThreadRouter);
app.use('/imageGeneration', imageGenerationRouter);

export default app;