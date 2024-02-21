import UserInfo, { UserInfoDocument } from '../models/UserInfo';

export const getUserInfoByIdService = async (
	id: string
): Promise<UserInfoDocument | null> => {
	return UserInfo.findById(id);
};

export const createUserInfoService = async (
	userInfo: UserInfoDocument
): Promise<UserInfoDocument | undefined> => {
	return userInfo.save();
};

export const isUserInfoExistsService = async (id: string): Promise<boolean> => {
	const userInfo = await getUserInfoByIdService(id);
	return userInfo !== null;
};

export const updateUserInfoService = async (
	id: string,
	updateData: Partial<UserInfoDocument>
): Promise<UserInfoDocument | null> => {
	const updatedUserInfo = await UserInfo.findByIdAndUpdate(id, updateData)
	return updatedUserInfo
};
