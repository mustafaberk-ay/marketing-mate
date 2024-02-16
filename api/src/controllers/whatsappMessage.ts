import { Request, Response } from 'express';
import { sendWhatsappMessageService, setupWhatsappService } from '../services/whatsappMessage';

export const setupWhatsapp = async (req: Request, res: Response) => {
	try {
		const response = await setupWhatsappService();
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};

export const sendWhatsappMessage = async (req: Request, res: Response) => {
	try {
		const { contactName, messageContent } = req.body;
		const response = await sendWhatsappMessageService(contactName, messageContent);
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
};
