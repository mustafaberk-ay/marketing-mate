import './App.css';
import { Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import MetaSetupPage from './pages/MetaSetupPage';
import GmailSetupPage from './pages/GmailSetupPage';
import WhatsappSetupPage from './pages/WhatsappSetupPage';
import TwilioSetupPage from './pages/TwilioSetupPage';
import SetupSummaryPage from './pages/SetupSummaryPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

function App() {
	return (
		<>
			<div className='bg-darkBlue fixed inset-0'>
				<Routes>
					<Route
						path='/'
						element={<WelcomePage />}
					/>
					<Route
						path='/home-page'
						element={<HomePage />}
					/>
					<Route
						path='/meta-setup-page'
						element={<MetaSetupPage />}
					/>
					<Route
						path='/gmail-setup-page'
						element={<GmailSetupPage />}
					/>
					<Route
						path='/whatsapp-setup-page'
						element={<WhatsappSetupPage />}
					/>
					<Route
						path='/twilio-setup-page'
						element={<TwilioSetupPage />}
					/>
					<Route
						path='/setup-summary-page'
						element={<SetupSummaryPage />}
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
