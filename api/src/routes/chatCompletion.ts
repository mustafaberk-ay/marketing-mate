import { Router } from "express";
import { getMessagesFromThread } from "../controllers/chatCompletion";

export const chatCompletionRouter = Router();

chatCompletionRouter.post('/getMessagesFromThread', getMessagesFromThread);