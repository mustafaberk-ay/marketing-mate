import mongoose, { Document } from 'mongoose';

export type UserInfoDocument = Document & {
	_id: string;
	facebook_user_access_token: string;
	gmail_address: string;
	gmail_app_password: string;
	assistant_phone_number: string;
};

export const UserInfoSchema = new mongoose.Schema({
	_id: { type: String, required: true },
	facebook_user_access_token: { type: String },
	gmail_address: { type: String },
	gmail_app_password: { type: String },
	assistant_phone_number: { type: String },
});

export default mongoose.model<UserInfoDocument>('userInfo', UserInfoSchema);
