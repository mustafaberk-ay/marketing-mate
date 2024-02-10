import { Request, Response } from 'express';
import { createCallService } from '../services/phoneCall';

export const createCall = async (req: Request, res: Response) => {
	try {
		const { productName, productScript, phoneNumber } = req.body;
		const response = await createCallService(
			productName,
			productScript,
			phoneNumber
		);
		res.json(`call sid: ${response}`);
	} catch (error) {
		res.json(error);
	}
};
