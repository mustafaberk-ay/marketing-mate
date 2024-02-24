export {};

declare global {
	interface Window {
		FB: any; // Ideally, use a more specific type for the Facebook SDK
	}
}

export interface FBAuthResponse {
	accessToken?: string;
}

export interface FBResponse<T = any> {
	data?: T[];
	link?: string;
	username?: string;
	id?: string;
}

export interface FBPage {
	id: string;
	access_token: string;
}

export interface UserInfo {
	_id: string;
	facebook_user_access_token: string;
	gmail_address: string;
	gmail_app_password: string;
	assistant_phone_number: string;
}

export interface UserInfoState {
	facebookUserAccessToken: string;
	gmailAddress: string;
	gmailAppPassword: string;
	isWhatsappSetupCompleted: boolean;
	salesPhoneNumber: string;
	isSetupCompleted: boolean;
	token: string;
	userId: string;
	isUserInfoExists: boolean;
}