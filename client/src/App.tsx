import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MetaSetupPage from './pages/MetaSetupPage';
import { useState } from 'react';
import GmailSetupPage from './pages/GmailSetupPage';
import WhatsappSetupPage from './pages/WhatsappSetupPage';
import TwilioSetupPage from './pages/TwilioSetupPage';

function App() {
	const [facebookUserAccessToken, setFacebookUserAccessToken] =
		useState<string>('');
	const [gmailAddress, setGmailAddress] = useState<string>('');
	const [gmailAppPassword, setGmailAppPassword] = useState<string>('');
	const [salesPhoneNumber, setSalesPhoneNumber] = useState<string>('');

	return (
		<>
			<div>
				<Routes>
					<Route
						path='/'
						element={<WelcomePage />}
					/>
					<Route
						path='/meta-setup-page'
						element={
							<MetaSetupPage
								facebookUserAccessToken={facebookUserAccessToken}
								setFacebookUserAccessToken={setFacebookUserAccessToken}
							/>
						}
					/>
					<Route
						path='/gmail-setup-page'
						element={
							<GmailSetupPage
								gmailAddress={gmailAddress}
								setGmailAddress={setGmailAddress}
								gmailAppPassword={gmailAppPassword}
								setGmailAppPassword={setGmailAppPassword}
							/>
						}
					/>
					<Route
						path='/whatsapp-setup-page'
						element={<WhatsappSetupPage />}
					/>
					<Route
						path='/twilio-setup-page'
						element={
							<TwilioSetupPage
								salesPhoneNumber={salesPhoneNumber}
								setSalesPhoneNumber={setSalesPhoneNumber}
							/>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
