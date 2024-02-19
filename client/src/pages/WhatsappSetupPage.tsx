import { Link } from 'react-router-dom';

interface WhatsappSetupPageProps {
	isWhatsappSetupCompleted: boolean;
	setIsWhatsappSetupCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhatsappSetupPage: React.FC<WhatsappSetupPageProps> = ({
	isWhatsappSetupCompleted,
	setIsWhatsappSetupCompleted,
}) => {
	const setupWhatsappButtonClicked = async () => {
		const res = await fetch(
			'http://localhost:3000/whatsappMessage/setupWhatsapp'
		);

		if (res.status === 200) {
			setIsWhatsappSetupCompleted(true);
		}

	};

	return (
		<div>
			<h1>Step 3: Whatsapp Setup Page</h1>
			<button onClick={setupWhatsappButtonClicked}>Setup Whatsapp</button>
			{ isWhatsappSetupCompleted ?  <p>Whatsapp Setup Completed Successfully</p> : ''}
			<br />
			<Link to='/gmail-setup-page'>Previous</Link>
			<Link to='/twilio-setup-page'>Next</Link>
			<Link to='/'>Quit</Link>
		</div>
	);
};

export default WhatsappSetupPage;
