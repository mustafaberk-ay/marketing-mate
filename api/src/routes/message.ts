import { Router } from "express";
import { createMessage, getHighestThreadId, getMessageById, getMessages } from "../controllers/message";

export const messageRouter = Router();

messageRouter.get('/getMessages', getMessages);
messageRouter.post('/createMessage', createMessage);
messageRouter.post('/getMessageById', getMessageById);
messageRouter.get('/getHighestThreadId', getHighestThreadId);