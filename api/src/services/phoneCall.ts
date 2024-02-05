import dotenv from 'dotenv';
import { Twilio } from 'twilio';

dotenv.config();

const client = new Twilio(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

export async function createCallService(script: string, phoneNumber: string) {
	return client.calls
		.create({
			twiml: `<Response><Say language="tr-TR">${script}</Say></Response>`,
			to: phoneNumber,
			from: '+19706446356',
		})
		.then((call) => call.sid)
		.catch((error) => console.error(error));
}
