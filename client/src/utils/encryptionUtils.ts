import CryptoJS from 'crypto-js';

// Encryption
export const encryptData = (data: string): string => {
	const secretKey = import.meta.env.VITE_CRYPTO_SECRET_KEY;
	return CryptoJS.AES.encrypt(data, secretKey).toString();
};

// Decryption
export const decryptData = (ciphertext: string): string => {
	const secretKey = import.meta.env.VITE_CRYPTO_SECRET_KEY;
	const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
	return bytes.toString(CryptoJS.enc.Utf8);
};
