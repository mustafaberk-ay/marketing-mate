import { Request, Response } from "express";
import { createMessageService, getHighestThreadIdService, getMessageByIdService, getMessagesService } from "../services/message";
import Message from "../models/Message";

export const getMessages = async (req: Request, res: Response) => {
    try {
        const response = await getMessagesService();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
}

export const createMessage = async (req: Request, res: Response) => {
    try {
        const messageInstance = new Message({
            thread_id: req.body.thread_id,
            role: req.body.role,
            content: req.body.content
        })
        const response = await createMessageService(messageInstance);
        res.json(response);
    } catch (error) {
        res.json(error)
    }
}

export const getMessageById = async (req: Request, res: Response) => {
    try {
        const id = req.body.id;
        const response = await getMessageByIdService(id);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

export const getHighestThreadId = async (req: Request, res: Response) => {
    try {
        const response = await getHighestThreadIdService();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}