import { Request, Response } from 'express';
import { createCallService } from '../services/phoneCall';

export const createCall = async (req: Request, res: Response) => {
	try {
		const { productName, productScript, clientPhoneNumber, assistantPhoneNumber } = req.body;
		const response = await createCallService(
			productName,
			productScript,
			clientPhoneNumber,
			assistantPhoneNumber
		);
		res.json(`call sid: ${response}`);
	} catch (error) {
		res.json(error);
	}
};
