import { Router } from 'express';
import {
	sendWhatsappMessage,
	setupWhatsapp,
} from '../controllers/whatsappMessage';

export const whatsappMessageRouter = Router();

whatsappMessageRouter.get('/setupWhatsapp', setupWhatsapp);
whatsappMessageRouter.post('/sendWhatsappMessage', sendWhatsappMessage);
