import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { setIsWhatsappSetupCompleted } from '../redux/slices/userInfoSlice';

const WhatsappSetupPage: React.FC = () => {
	const dispatch = useDispatch()
	const userInfo = useSelector((state: RootState) => state.user)

	const setupWhatsappButtonClicked = async () => {
		const res = await fetch(
			'http://localhost:3000/whatsappMessage/setupWhatsapp'
		);

		if (res.status === 200) {
			dispatch(setIsWhatsappSetupCompleted(true))
		}

	};

	return (
		<div>
			<h1>Step 3: Whatsapp Setup Page</h1>
			<button onClick={setupWhatsappButtonClicked}>Setup Whatsapp</button>
			{ userInfo.isWhatsappSetupCompleted ?  <p>Whatsapp Setup Completed Successfully</p> : ''}
			<br />
			<Link to='/gmail-setup-page'>Previous</Link>
			<Link to='/twilio-setup-page'>Next</Link>
			<Link to='/'>Quit</Link>
		</div>
	);
};

export default WhatsappSetupPage;
