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
