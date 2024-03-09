import { Link } from 'react-router-dom';
import { encryptData } from '../utils/encryptionUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setIsSetupCompleted } from '../redux/slices/userInfoSlice';

const SetupSummaryPage: React.FC = () => {
	const dispatch = useDispatch()
	const userInfo = useSelector((state: RootState) => state.user)

	return (
		<div>
			<h1>Step 5: Setup Summary</h1>
			<h3>Facebook Login Status</h3>
			{userInfo.facebookUserAccessToken ? (
				<p>Logged into Facebook Successfully</p>
			) : (
				<p>Not Logged into Facebook</p>
			)}
			<h3>Gmail Setup Info</h3>
			<p>Gmail Address: {userInfo.gmailAddress}</p>
			{userInfo.gmailAppPassword ? (
				<p>Gmail App Password Retrieved Successfully</p>
			) : (
				<p>Please Setup Gmail App Password</p>
			)}
			<h3>Whatsapp Setup Info</h3>
			{userInfo.isWhatsappSetupCompleted ? <p>Whatsapp Setup is Successful</p> : <p>Whatsapp Setup is not done</p>}
			<h3>Cold Call Setup Info</h3>
			<p>Sales Assistant Phone Number: {userInfo.salesPhoneNumber}</p>
			<Link to='/'>
				<button onClick={completeSetupButtonOnClick}>Complete Setup</button>
			</Link>
			<Link to='/twilio-setup-page'>Previous</Link>
			<Link to='/'>Quit</Link>
		</div>
	);

	async function completeSetupButtonOnClick() {
		const encryptedFacebookUserAccessToken = encryptData(
			userInfo.facebookUserAccessToken
		);
		const encryptedGmailAddress = encryptData(userInfo.gmailAddress);
		const encryptedGmailAppPassword = encryptData(userInfo.gmailAppPassword);
		const encryptedSalesPhoneNumber = encryptData(userInfo.salesPhoneNumber);
		try {
			const res = await fetch('http://localhost:3000/user-info/createUserInfo', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					facebook_user_access_token: encryptedFacebookUserAccessToken,
					gmail_address: encryptedGmailAddress,
					gmail_app_password: encryptedGmailAppPassword,
					assistant_phone_number: encryptedSalesPhoneNumber,
					_id: userInfo.userId
				}),
			});
			console.log(res)
		} catch (error) {
			console.log(error)
		}

		dispatch(setIsSetupCompleted(true))
	}
};

export default SetupSummaryPage;
