import dotenv from 'dotenv';
import { Twilio } from 'twilio';

dotenv.config();

const client = new Twilio(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

export async function createCallService(
	productName: string,
	productScript: string,
	phoneNumber: string
) {
	const { VoiceResponse } = require('twilio').twiml;

	const response = new VoiceResponse();
	response.say(`I have a ${productName} that I want to tell you about!`);
	productScript = encodeURIComponent(productScript);

	const gather = response.gather({
		input: 'speech',
		timeout: 3,
		action: `https://processresponse-8078.twil.io/processResponse?productScript=${productScript}`,
		method: 'POST',
	});
	gather.say(
		"Please say 'yes' if you are interested, or remain silent to end the call."
	);

	response.hangup();

	// Assuming `client` is an instance of Twilio's REST API client that's already configured.
	return client.calls
		.create({
			twiml: response.toString(),
			to: phoneNumber,
			from: '+19706446356', // This should be a Twilio number you own.
		})
		.then((call) => call.sid)
		.catch((error) => console.error(error));
}
