import { Link } from 'react-router-dom';
import { encryptData } from '../utils/encryptionUtils';

interface SetupSummaryPageProps {
	facebookUserAccessToken: string;
	gmailAddress: string;
	gmailAppPassword: string;
	salesPhoneNumber: string;
	setIsSetupCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetupSummaryPage: React.FC<SetupSummaryPageProps> = ({
	facebookUserAccessToken,
	gmailAddress,
	gmailAppPassword,
	salesPhoneNumber,
	setIsSetupCompleted,
}) => {
	return (
		<div>
			<h1>Step 5: Setup Summary</h1>
			<h3>Facebook Login Status</h3>
			{facebookUserAccessToken ? (
				<p>Logged into Facebook Successfully</p>
			) : (
				<p>Not Logged into Facebook</p>
			)}
			<h3>Gmail Setup Info</h3>
			<p>Gmail Address: {gmailAddress}</p>
			{gmailAppPassword ? (
				<p>Gmail App Password Retrieved Successfully</p>
			) : (
				<p>Please Setup Gmail App Password</p>
			)}
			<h3>Cold Call Setup Info</h3>
			<p>Sales Assistant Phone Number: {salesPhoneNumber}</p>
			<Link to='/'>
				<button onClick={completeSetupButtonOnClick}>Complete Setup</button>
			</Link>
		</div>
	);

	async function completeSetupButtonOnClick() {
		const encryptedFacebookUserAccessToken = encryptData(
			facebookUserAccessToken
		);
		const encryptedGmailAddress = encryptData(gmailAddress);
		const encryptedGmailAppPassword = encryptData(gmailAppPassword);
		const encryptedSalesPhoneNumber = encryptData(salesPhoneNumber);
		try {
			const res = await fetch('http://localhost:3000/user-info/createUserInfo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					facebook_user_access_token: encryptedFacebookUserAccessToken,
					gmail_address: encryptedGmailAddress,
					gmail_app_password: encryptedGmailAppPassword,
					assistant_phone_number: encryptedSalesPhoneNumber,
				}),
			});
		} catch (error) {
			console.log(error)
		}

		setIsSetupCompleted(true);
	}
};

export default SetupSummaryPage;
