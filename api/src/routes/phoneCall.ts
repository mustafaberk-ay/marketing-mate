import { Router } from "express";
import { createCall, processResponse1 } from "../controllers/phoneCall";

export const phoneCallRouter = Router();

phoneCallRouter.post('/createCall', createCall)
phoneCallRouter.post('/processResponse1', processResponse1)