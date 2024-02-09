import dotenv from 'dotenv';
import { Twilio } from 'twilio';

dotenv.config();

const client = new Twilio(
	process.env.TWILIO_ACCOUNT_SID,
	process.env.TWILIO_AUTH_TOKEN
);

export async function createCallService(script: string, phoneNumber: string) {
	const { VoiceResponse } = require('twilio').twiml;

	const response = new VoiceResponse();
	response.say(script);
	const encodedStr = encodeURIComponent("Hello World")

	const gather = response.gather({
		input: 'speech',
		timeout: 5,
		//action: 'https://processresponse-8078.twil.io/processResponse1',
		action: `https://processresponse-8078.twil.io/processResponse1?res=${encodedStr}`,
		method: 'POST',
	});
	gather.say(
		"Please say 'yes' if you are interested, or remain silent to end the call."
	);

	// If no response is received within the timeout, Twilio will move to the next verb.
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

export async function processResponse1Service(speechResult: string) {
	const { VoiceResponse } = require('twilio').twiml;
	const response = new VoiceResponse();
	console.log('speech result: ' + speechResult.toLowerCase());

	if (speechResult.toLowerCase() === 'yes.') {
		response.say(
			'We received your positive feedback. We will contact you soon!'
		);
	} else {
		response.say('Thanks for your time, have a nice day!');
	}

	response.hangup();
	return response.toString();
}
