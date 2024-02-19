import { Request, Response } from 'express';
import { sendGmailEmailService } from '../services/gmailEmail';

export const sendGmailEmail = async (req: Request, res: Response) => {
	try {
		const { sender, to, message, subject, appPassword } = req.body;
		const response = await sendGmailEmailService(sender, to, message, subject, appPassword);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
