import { Request, Response } from 'express';
import { createCallService } from '../services/phoneCall';

export const createCall = async (req: Request, res: Response) => {
	try {
		const script = req.body.script;
        const phoneNumber = req.body.phoneNumber;
		const response = await createCallService(script, phoneNumber);
		res.json(`call sid: ${response}`);
	} catch (error) {
		res.json(error);
	}
};
