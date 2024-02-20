import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MetaSetupPage from './pages/MetaSetupPage';
import { useState } from 'react';
import GmailSetupPage from './pages/GmailSetupPage';
import WhatsappSetupPage from './pages/WhatsappSetupPage';
import TwilioSetupPage from './pages/TwilioSetupPage';
import SetupSummaryPage from './pages/SetupSummaryPage';
import ProfilePage from './pages/ProfilePage';

function App() {
	const [facebookUserAccessToken, setFacebookUserAccessToken] =
		useState<string>('');
	const [gmailAddress, setGmailAddress] = useState<string>('');
	const [gmailAppPassword, setGmailAppPassword] = useState<string>('');
	const [isWhatsappSetupCompleted, setIsWhatsappSetupCompleted] =
		useState<boolean>(false);
	const [salesPhoneNumber, setSalesPhoneNumber] = useState<string>('');
	const [isSetupCompleted, setIsSetupCompleted] = useState<boolean>(false);

	return (
		<>
			<div>
				<Routes>
					<Route
						path='/'
						element={<WelcomePage isSetupCompleted={isSetupCompleted} />}
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
						element={
							<WhatsappSetupPage
								isWhatsappSetupCompleted={isWhatsappSetupCompleted}
								setIsWhatsappSetupCompleted={setIsWhatsappSetupCompleted}
							/>
						}
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
					<Route
						path='/setup-summary-page'
						element={
							<SetupSummaryPage
								facebookUserAccessToken={facebookUserAccessToken}
								gmailAddress={gmailAddress}
								gmailAppPassword={gmailAppPassword}
								isWhatsappSetupCompleted={isWhatsappSetupCompleted}
								salesPhoneNumber={salesPhoneNumber}
								setIsSetupCompleted={setIsSetupCompleted}
							/>
						}
					/>
					<Route
						path='/profile-page'
						element={<ProfilePage />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
