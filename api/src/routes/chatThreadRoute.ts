import { Router } from "express";
import { createThread, getLastMessage, retrieveAssistant, sendMessage } from "../controllers/chatThreadController";

export const chatThreadRouter = Router();

chatThreadRouter.get('/retrieveAssistant', retrieveAssistant);
chatThreadRouter.get('/createThread', createThread);
chatThreadRouter.post('/sendMessage', sendMessage);
chatThreadRouter.get('/getLastMessage', getLastMessage);