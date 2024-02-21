import { Request, Response } from 'express';
import UserInfo from '../models/UserInfo';
import {
	createUserInfoService,
	getUserInfoByIdService,
} from '../services/dbUserInfo';

export const createUserInfo = async (req: Request, res: Response) => {
	try {
		const userInfoInstance = new UserInfo({
			facebook_user_access_token: req.body.facebook_user_access_token,
			gmail_address: req.body.gmail_address,
			gmail_app_password: req.body.gmail_app_password,
			assistant_phone_number: req.body.assistant_phone_number,
			user_id: req.body.user_id
		});
		const response = await createUserInfoService(userInfoInstance);
		res.json(response);
	} catch (error) {
		res.json(error);
	}
};

export const getUserInfoById = async (req: Request, res: Response) => {
	try {
		const id = req.body.id;
		const response = await getUserInfoByIdService(id);
		res.json(response);
	} catch (error) {
		res.json(error);
	}
};
