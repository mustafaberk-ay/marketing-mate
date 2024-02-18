import { Link } from 'react-router-dom';

const WhatsappSetupPage = () => {
	const setupWhatsappButtonClicked = async () => {
		const res = await fetch('http://localhost:3000/whatsapp/setupWhatsapp');
		console.log(res);
	};

	return (
		<div>
			<h1>Step 3: Whatsapp Setup Page</h1>
			<button onClick={setupWhatsappButtonClicked}>Setup Whatsapp</button>
			<br />
			<Link to='/gmail-setup-page'>Previous</Link>
			<Link to='/twilio-setup-page'>Next</Link>
			<Link to='/'>Quit</Link>
		</div>
	);
};

export default WhatsappSetupPage;
