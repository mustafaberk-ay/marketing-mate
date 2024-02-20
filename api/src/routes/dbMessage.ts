import { Router } from 'express';
import {
	createMessage,
	getHighestThreadId,
	getMessageById,
	getMessages,
} from '../controllers/dbMessage';

export const dbMessageRouter = Router();

dbMessageRouter.get('/getMessages', getMessages);
dbMessageRouter.post('/createMessage', createMessage);
dbMessageRouter.post('/getMessageById', getMessageById);
dbMessageRouter.get('/getHighestThreadId', getHighestThreadId);
