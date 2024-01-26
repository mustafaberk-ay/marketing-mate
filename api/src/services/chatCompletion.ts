import OpenAI from 'openai';
import ChatCompletionMessageParam from 'openai';
import dotenv from 'dotenv';
import Message, { MessageDocument } from '../models/Message';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const openai = new OpenAI({
	apiKey: process.env['OPENAI_API_KEY'],
});

function convertRoleFromString(
	roleString: string
): 'function' | 'system' | 'user' | 'assistant' | 'tool' {
	switch (roleString) {
		case 'function':
		case 'system':
		case 'user':
		case 'assistant':
		case 'tool':
			return roleString as
				| 'function'
				| 'system'
				| 'user'
				| 'assistant'
				| 'tool';
	}

	return 'function';
}

async function getMessagesFromThread(threadId: number) {
	const messages = await Message.find({ thread_id: threadId })
		.sort({ created_at: 1 })
		.exec();

    const functionMessages: ChatCompletionMessageParam[] = [];
    const otherMessages: ChatCompletionMessageParam[] = [];
    
    messages.forEach((msg) => {
        const message: ChatCompletionMessageParam = {
          name: uuidv4(),
          role: msg.role as "user" | "assistant" | "system" | "tool" | "function",
          content: msg.content,
        };
    
        if (message.role === "function") {
          functionMessages.push(message);
        } else {
          otherMessages.push(message);
        }
      });

	return messageList;
}

async function conversationExists(
	thread_id: number
) {
	const count = await Message.countDocuments({ thread_id }).exec();
	if (count > 0) {
		return true;
	} else {
		return false;
	}
}

async function saveMessage(message: MessageDocument) {
	try {
		const newMessage = new Message({
			conversationId: message.thread_id,
			date: message.created_at,
			role: message.role,
			content: message.content,
		});

		await newMessage.save();
		console.log('Successful insertion');
	} catch (error) {
		console.error(error);
	}
}

export async function chatCompletionService(
	userMessage: string,
	threadId: number
) {
	const systemInstructions =
		"Marketing Mate is a sophisticated marketing assistant GPT designed for businesses, adept in scenarios like ad creation, email marketing, WhatsApp business messaging, and cold calling. It assists in developing effective marketing strategies and materials, ensuring impactful and courteous interactions.A key feature of Marketing Mate is its ability to extract actions from user prompts. It analyzes the user's input to identify specific marketing tasks or needs, such as creating an ad or drafting a marketing email. Based on this analysis, it provides tailored suggestions and strategies.Marketing Mate always seeks clarification on unclear inputs to deliver the best results. It personalizes responses according to the user's marketing expertise, ranging from technical advice for professionals to simpler guidance for beginners. User feedback is sought for continuous improvement in its service.First, gather all required information about what the user wants and about the product. Also, learn about the tone of the output should be. Ask as many questions as you want to generate the best output. Once you gather all the information from the user inputs, identify domain specific action information from the prompt with the following rules by xml tags: <domainTemplate name='marketing'>	<targetTemplate name='instagram'>		<actionTemplate name='generate ad script'>			<sentence>				<action>generate ad script</action>				for <productName>xxx</productName>				with <keyFeatures>xxx</keyFeatures>                targeting <targetAudience>xxx</targetAudience>				using a <tone>xxx</tone>				on <target>instagram</target>			</sentence>		</actionTemplate>	</targetTemplate>	<targetTemplate name='email'>		<actionTemplate name='generate email script'>			<sentence>				<action>generate email script</action>                for <productName>xxx</productName>                with <keyFeatures>xxx</keyFeatures>                targeting <targetAudience>xxx</targetAudience>                using a <tone>xxx</tone>                for <target>email</target>			</sentence>		</actionTemplate>	</targetTemplate>	<targetTemplate name='whatsapp'>	    <actionTemplate name='generate whatsapp message'>	        <sentence>	            <action>generate whatsapp message</action>	            for <productName>xxx</productName>	            with <keyFeatures>xxx</keyFeatures>	            using a <tone>xxx</tone>	            for <target>whatsapp</target>	        </sentence>	    </actionTemplate>	</targetTemplate></domainTemplate>Then, generate a JSON output with the templated JSON data below.templated JSON data :{  'domain': '[domain]',  'target': '[target]',  'action': '[action]',  'targetAudience': '[targetAudience]',  'product': '[productName]',  'keyFeatures': '[keyFeatures]',  'tone': '[tone]'}Your result prompt must be only the json output. Make sure that all fields of the json output are string, not array of strings.abilities: browser,dalle";
	const systemMes = new Message({
		thread_id: threadId,
		created_at: new Date().toISOString(),
		role: 'system',
		content: systemInstructions,
	});

	let messageList: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [];

	if (userMessage === '') {
		userMessage = 'Hello';
	}

    const exists = await conversationExists(threadId);

    if (exists) {
        messageList = await getMessagesFromThread(threadId);
      } else {
        messageList.push({ role: systemMes.role, content: systemMes.content});
        await saveMessage(systemMes);
      }
}
