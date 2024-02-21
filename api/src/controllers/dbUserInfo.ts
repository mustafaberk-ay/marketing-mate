import { Request, Response } from 'express';
import UserInfo from '../models/UserInfo';
import {
	createUserInfoService,
	getUserInfoByIdService,
	isUserInfoExistsService,
	updateUserInfoService,
} from '../services/dbUserInfo';

export const createUserInfo = async (req: Request, res: Response) => {
	try {
		const userInfoInstance = new UserInfo({
			facebook_user_access_token: req.body.facebook_user_access_token,
			gmail_address: req.body.gmail_address,
			gmail_app_password: req.body.gmail_app_password,
			assistant_phone_number: req.body.assistant_phone_number,
			_id: req.body._id,
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

export const isUserInfoExists = async (req: Request, res: Response) => {
	try {
		const id = req.body.id;
		const response = await isUserInfoExistsService(id);
		res.json(response);
	} catch (error) {
		res.json(error);
	}
};

export const updateUserInfo = async (req: Request, res: Response) => {
	try {
		const id = req.body.id;
		const updateData = req.body.updateData;
		const updatedUserInfo = await updateUserInfoService(id, updateData);

		if (updatedUserInfo) {
			res.json({
				message: 'User info updated successfully',
				userInfo: updatedUserInfo,
			});
		} else {
			res.status(404).json({
				message: 'User info not found',
			});
		}
	} catch (error) {
		res.status(500).json({
			message: 'Error updating user info',
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};
