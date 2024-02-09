import { Request, Response } from 'express';
import {
	createCallService,
	processResponse1Service,
} from '../services/phoneCall';

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

export const processResponse1 = async (req: Request, res: Response) => {
	try {
		const speechResult = req.body.SpeechResult;
		const twiml = await processResponse1Service(speechResult);
		res.type('application/xml');
		res.send(twiml);
	} catch (error) {
		res.json(error);
	}
};
