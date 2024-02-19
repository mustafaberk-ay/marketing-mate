import { Router } from "express";
import { sendGmailEmail } from "../controllers/gmailEmail";

export const gmailEmailRouter = Router()

gmailEmailRouter.post('/sendGmailEmail', sendGmailEmail)