import { Request, Response } from "express";
import { getMessagesFromThreadService } from "../services/chatCompletion";

export const getMessagesFromThread = async (req: Request, res: Response) => {
    try {
        const threadId = req.body.threadId;
        const response = await getMessagesFromThreadService(threadId);
        res.json(response);
    } catch (error) {
        res.json(error)
    }
}