export type lastMessageObjType = {
    lastMessageText: string,
	lastMessageId: string,
	role: string
}

export enum roleTypes {
	System = "system",
	User = "user",
	Assistant = "assistant"
}