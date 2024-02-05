import { Router } from "express";
import { createCall } from "../controllers/phoneCall";

export const phoneCallRouter = Router();

phoneCallRouter.post('/createCall', createCall)