import { Request, Response } from "express";
//import { createImageVariationService, editImageService, generateImageService } from "../services/imageGeneration";
import { generateImageService } from "../services/imageGeneration";

export const generateImage = async (req: Request, res: Response) => {
    try {
        const prompt = req.body.prompt;
        const style = req.body.style;
        const response = await generateImageService(prompt, style);
        res.json(response);
    } catch (error) {
        res.json(error);
    }
}

// export const createImageVariations = async (req: Request, res: Response) => {
//     try {
//         const imgUrl = req.body.imgUrl;
//         const n = req.body.n;

//         const response = await createImageVariationService(imgUrl, n);
//         res.json(response);
//     } catch (error) {
//         res.json(error);
//     }
// }

// export const editImage = async (req: Request, res: Response) => {
//     try {
//         const prompt = req.body.prompt;
//         const imgUrl = req.body.imgUrl;
//         const n = req.body.n;

//         const response = await editImageService(prompt, imgUrl, n);
//         res.json(response);
//     } catch (error) {
//         res.json(error);
//     }
// }