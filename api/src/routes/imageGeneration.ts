import { Router } from "express";
import { createImageVariations, editImage, generateImage } from "../controllers/imageGeneration";

export const imageGenerationRouter = Router();

imageGenerationRouter.post('/generateImage', generateImage);
imageGenerationRouter.post('/editImage', editImage);
imageGenerationRouter.post('/createImageVariations', createImageVariations);