import { Router } from 'express';
import { createUserInfo, getUserInfoById, isUserInfoExists, updateUserInfo } from '../controllers/dbUserInfo';

export const dbUserInfoRouter = Router();

dbUserInfoRouter.post('/createUserInfo', createUserInfo)
dbUserInfoRouter.post('/getUserInfoById', getUserInfoById) 
dbUserInfoRouter.post('/isUserInfoExists', isUserInfoExists)
dbUserInfoRouter.post('/updateUserInfo', updateUserInfo)