import mongoose, { Date, Document } from 'mongoose';

export type MessageDocument = Document & {
	thread_id: number;
	role: string;
	content: string;
	created_at: Date;
};

export const MessageSchema = new mongoose.Schema({
	thread_id: { type: String, required: true },
	role: { type: String, required: true },
	content: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
});

export default mongoose.model<MessageDocument>('message', MessageSchema)