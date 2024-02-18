import express, { Express, Request, Response, Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { chatThreadRouter } from './routes/chatThread';
import { imageGenerationRouter } from './routes/imageGeneration';
import { dbMessageRouter } from './routes/dbMessage';
import { phoneCallRouter } from './routes/phoneCall';
import { whatsappMessageRouter } from './routes/whatsappMessage';
import { dbUserInfoRouter } from './routes/dbUserInfo';

dotenv.config();
const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/chatThread', chatThreadRouter);
app.use('/imageGeneration', imageGenerationRouter);
app.use('/phoneCall', phoneCallRouter);
app.use('/whatsappMessage', whatsappMessageRouter);

//db routers
app.use('/message', dbMessageRouter);
app.use('/user-info', dbUserInfoRouter);

export default app;
