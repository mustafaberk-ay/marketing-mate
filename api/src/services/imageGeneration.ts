import OpenAI from 'openai';
import dotenv from 'dotenv';
// import axios from 'axios';
// import sharp from 'sharp';
// import fs from 'fs';

dotenv.config();

const openai = new OpenAI({
	apiKey: process.env['OPENAI_API_KEY'],
});

export async function generateImageService(prompt: string, style: "vivid" | "natural") {
	const response = await openai.images.generate({
		model: 'dall-e-3',
		prompt: prompt,
		n: 1,
		size: '1024x1024',
		style: style,
	});

	return response.data[0].url;
}

// export async function createImageVariationService(imgUrl: string, n = 1) {
// 	const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

// 	if (response.status !== 200) {
// 		return 'ERROR: Failed to fetch image';
// 	}

// 	const imageBuffer = Buffer.from(response.data);
// 	const pngBuffer = await sharp(imageBuffer).toFormat('png').toBuffer();
// 	fs.writeFileSync('variation.png', pngBuffer);

// 	const image = await openai.images.createVariation({
// 		image: fs.createReadStream('variation.png'),
// 		n: n,
// 	});

// 	return image.data;
// }

// export async function editImageService(prompt: string, imgUrl: string, n = 1) {
// 	const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });

// 	if (response.status !== 200) {
// 		return 'ERROR: Failed to fetch image';
// 	}

// 	const imageBuffer = Buffer.from(response.data);
// 	const pngBuffer = await sharp(imageBuffer).toFormat('png').toBuffer();
// 	fs.writeFileSync('edit.png', pngBuffer);

// 	const image = await openai.images.edit({
// 		prompt: prompt,
// 		image: fs.createReadStream('edit.png'),
// 		n: n,
// 	});

// 	return image.data;
// }
