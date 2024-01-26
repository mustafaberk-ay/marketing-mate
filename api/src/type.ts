export type lastMessageObjType = {
    lastMessageText: string,
	lastMessageId: string,
	role: string
}

export enum RoleEnum {
	function = 'function',
	system = 'system',
	user = 'user',
	assistant = 'assistant',
	tool = 'tool',
}