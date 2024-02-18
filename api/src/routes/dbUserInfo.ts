import { Router } from 'express';
import { createUserInfo, getUserInfoById } from '../controllers/dbUserInfo';

export const dbUserInfoRouter = Router();

dbUserInfoRouter.post('/createUserInfo', createUserInfo)
dbUserInfoRouter.post('/getUserInfoById', getUserInfoById) 