import { Request, Response } from "express";
import { createThreadService, getLastMessageService, retrieveMarketingMateAssistantService, sendMessageService } from "../services/chatThread";

export const retrieveAssistant = async (req: Request, res: Response) => {
    try {
        const response = await retrieveMarketingMateAssistantService();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

export const createThread = async (req: Request, res: Response) => {
    try {
        const response = await createThreadService();
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

export const sendMessage = async (req: Request, res: Response) => {
    try {
        // const userMessage = req.body.userMessage
        // const response = await sendMessageService(userMessage)
        // res.json(response);
        res.json('send message endpoint called')
    } catch (error) {
        res.json(error);
    }
}

export const getLastMessage = async (req: Request, res: Response) => {
    try {
        // const response = await getLastMessageService();
        // if(response === "Last message does not contain text content."){
        //     res.status(404)
        // }
        // res.json(response);
        res.json('get last message endpoint called')
    } catch (error) {
        res.json(error);
    }
}