export {}

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