import CryptoJS from 'crypto-js';
import dotenv from 'dotenv';
dotenv.config()

// Encryption
export const encryptData = (data: string): string => {
	const secretKey = process.env.VITE_CRYPTO_SECRET_KEY as string;
	return CryptoJS.AES.encrypt(data, secretKey).toString();
};

// Decryption
export const decryptData = (ciphertext: string): string => {
	const secretKey = process.env.VITE_CRYPTO_SECRET_KEY as string;
	const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
	return bytes.toString(CryptoJS.enc.Utf8);
};
