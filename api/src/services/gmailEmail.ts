import nodemailer from 'nodemailer';

export async function sendGmailEmailService(
	sender: string,
	to: string,
	message: string,
	subject: string,
	appPassword: string,
	imageUrl: string
) {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true, // true for 465, false for other ports
		auth: {
			user: sender,
			pass: appPassword,
		},
	});

	const htmlContent = `
		<p>${message}</p>
		<img src="${imageUrl}" alt="Image" style="width:auto; max-width:100%; height:auto;">`

    return new Promise((resolve, reject) => {
		transporter.sendMail({
			from: sender,
			to: to,
			subject: subject,
			text: message,
			html: htmlContent
		}, (error, info) => {
			transporter.close()
			if (error) {
                reject(error);
            } else {
                resolve(`Email sent with message id: ${info.messageId}`);
            }
		});
	})
}
