import React from 'react';
import { WebDriver, Builder, By, until, Browser } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

interface WhatsappSetupPageProps {
	isWhatsappSetupComplete: boolean;
	setIsWhatsappSetupComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhatsappSetupPage: React.FC<WhatsappSetupPageProps> = ({
	isWhatsappSetupComplete,
	setIsWhatsappSetupComplete,
}) => {
	const setupWhatsappButtonClicked = async () => {
		
	};

	return (
		<div>
			<h1>Whatsapp Setup Page</h1>
            {isWhatsappSetupComplete ? <p>Whatsapp Setup Already Completed</p> : ''}
			<button onClick={setupWhatsappButtonClicked}>Setup Whatsapp</button>
		</div>
	);
};

export default WhatsappSetupPage;
