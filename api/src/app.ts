import express, { Express, Request, Response , Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import { chatThreadRouter } from './routes/chatThread';
import { imageGenerationRouter } from './routes/imageGeneration';
import { messageRouter } from './routes/message';
import { phoneCallRouter } from './routes/phoneCall';

dotenv.config();
const app: Application = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/chatThread', chatThreadRouter);
app.use('/imageGeneration', imageGenerationRouter);
app.use('/message', messageRouter);
app.use('/phoneCall', phoneCallRouter)

export default app;