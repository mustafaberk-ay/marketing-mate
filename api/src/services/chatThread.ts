import OpenAI from "openai";
import dotenv from "dotenv";
import { lastMessageObjType } from "../type";

dotenv.config();

var globalAssistant: OpenAI.Beta.Assistants.Assistant;
var globalThread: OpenAI.Beta.Threads.Thread;

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY']
})

export async function retrieveMarketingMateAssistantService(): Promise<string> {
	globalAssistant =  await openai.beta.assistants.retrieve('asst_T6uOXhzTSTEITokDNUQ3Q1Sn');
	if(globalAssistant){
		return `SUCCESS: assistant ${globalAssistant.name} is retrieved succesfully.`;
	}
	return 'ERROR: assistant retrieval is not successful.';
}

export async function createThreadService(): Promise<string> {
	globalThread = await openai.beta.threads.create();
	if(globalThread){
		return `SUCCESS: thread ${globalThread.id} created successfully.`;
	}
	return 'ERROR: thread is not created successfully.'
}

export async function sendMessageService(userMessage: string): Promise<string> {
	if (globalAssistant && globalThread) {
		const message = await openai.beta.threads.messages.create(globalThread.id, {
			role: 'user',
			content: userMessage,
		});

		const run = await openai.beta.threads.runs.create(globalThread.id, {
			assistant_id: globalAssistant.id,
		});

		return `SUCCESS: message ${message.id} and run ${run.id} created successfully.`
	}
	return 'ERROR: message or run is not successful';
}

export async function getLastMessageService(): Promise<string | lastMessageObjType | undefined> {
	if (globalThread) {
		const assistantMessages = await openai.beta.threads.messages.list(
			globalThread.id
		);

		if (assistantMessages.data.length > 0) {
			const lastMessage = assistantMessages.data[0];
			const textContent = lastMessage.content.find(
				(item) => item.type === 'text'
			);

			if (textContent && textContent.type === 'text') {
				const lastMessageText = textContent.text.value;
				const lastMessageId = lastMessage.id
				const role = lastMessage.role
				
				const lastMessageObj : lastMessageObjType = {
					lastMessageText,
					lastMessageId,
					role
				}
				return lastMessageObj;
			} else {
				return 'Last message does not contain text content.';
			}
		} else {
			return 'No messages found for the assistant in this thread.';
		}
	}
}

