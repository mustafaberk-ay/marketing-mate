import Message, { MessageDocument } from '../models/Message';

export const getMessagesService = async (): Promise<
	MessageDocument[] | undefined
> => {
	return Message.find().then((data: MessageDocument[]) => data);
};

export const createMessageService = async (
	message: MessageDocument
): Promise<MessageDocument | undefined> => {
	return message.save();
};

export const getMessageByIdService = async (
	id: string
): Promise<MessageDocument | null> => {
	return Message.findById(id);
};

export const getHighestThreadIdService = async (): Promise<number | null> => {
	const result = await Message.findOne({}, {}, { sort: { thread_id: -1 } });
	if (result) {
		return result.thread_id;
	} else {
		return null; // No documents found
	}
};
