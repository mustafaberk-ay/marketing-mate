import { Request, Response } from 'express';
import { sendGmailEmailService } from '../services/gmailEmail';
import { decryptData } from '../utils/encryptionUtils';

export const sendGmailEmail = async (req: Request, res: Response) => {
	try {
		const { sender, to, message, subject, appPassword, imageUrl } = req.body;
		const decryptedAppPassword = decryptData(appPassword)
		const response = await sendGmailEmailService(sender, to, message, subject, decryptedAppPassword, imageUrl);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
