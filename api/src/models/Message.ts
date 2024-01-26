import mongoose, { Date, Document } from 'mongoose';
import { RoleEnum } from '../type';

export type MessageDocument = Document & {
	thread_id: number;
	role: keyof typeof RoleEnum;
	content: string;
	created_at: Date;
};

export const MessageSchema = new mongoose.Schema({
	thread_id: { type: Number, required: true },
	role: { type: String, enum: Object.values(RoleEnum), required: true },
	content: { type: String, required: true },
	created_at: { type: Date, default: Date.now },
});

export default mongoose.model<MessageDocument>('message', MessageSchema)