import mongoose, { Document} from "mongoose";

export type UserInfoDocument = Document & {
    facebook_user_access_token: string;
    gmail_address: string;
    gmail_app_password: string;
    assistant_phone_number: string;
    user_id: string;
}

export const UserInfoSchema = new mongoose.Schema({
    facebook_user_access_token: {type: String},
    gmail_address: {type: String},
    gmail_app_password: {type: String},
    assistant_phone_number: {type: String},
    user_id: {type: String, required: true}
})

export default mongoose.model<UserInfoDocument>('userInfo', UserInfoSchema)