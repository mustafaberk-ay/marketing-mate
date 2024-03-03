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
import SocialMediaMarketingPage1 from './pages/socialMediaMarketing/SocialMediaMarketing1';
import SocialMediaMarketingPage2 from './pages/socialMediaMarketing/SocialMediaMarketing2';
import SocialMediaMarketingPage3 from './pages/socialMediaMarketing/SocialMediaMarketing3';
import SocialMediaMarketing4 from './pages/socialMediaMarketing/SocialMediaMarketing4';
import MessageMarketingPage1 from './pages/messageMarketing/MessageMarketingPage1';
import MessageMarketingPage2 from './pages/messageMarketing/MessageMarketingPage2';
import MessageMarketingPage3 from './pages/messageMarketing/MessageMarketingPage3';
import MessageMarketingPage4 from './pages/messageMarketing/MessageMarketingPage4';
import EmailMarketingPage1 from './pages/emailMarketingPages/EmailMarketingPage1';
import EmailMarketingPage2 from './pages/emailMarketingPages/EmailMarketingPage2';
import EmailMarketingPage3 from './pages/emailMarketingPages/EmailMarketingPage3';
import EmailMarketingPage4 from './pages/emailMarketingPages/EmailMarketingPage4';
import ColdCallingPage1 from './pages/coldCallingPages/ColdCallingPage1';
import ColdCallingPage2 from './pages/coldCallingPages/ColdCallingPage2';
import ColdCallingPage3 from './pages/coldCallingPages/ColdCallingPage3';

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
						path='/social-media-marketing-1'
						element={<SocialMediaMarketingPage1 />}
					/>
					<Route
						path='/social-media-marketing-2'
						element={<SocialMediaMarketingPage2 />}
					/>
					<Route
						path='/social-media-marketing-3'
						element={<SocialMediaMarketingPage3 />}
					/>
					<Route
						path='/social-media-marketing-4'
						element={<SocialMediaMarketing4 />}
					/>

					<Route
						path='/message-marketing-1'
						element={<MessageMarketingPage1 />}
					/>
					<Route
						path='/message-marketing-2'
						element={<MessageMarketingPage2 />}
					/>
					<Route
						path='/message-marketing-3'
						element={<MessageMarketingPage3 />}
					/>
					<Route
						path='/message-marketing-4'
						element={<MessageMarketingPage4 />}
					/>

					<Route
						path='/email-marketing-1'
						element={<EmailMarketingPage1 />}
					/>
					<Route
						path='/email-marketing-2'
						element={<EmailMarketingPage2 />}
					/>
					<Route
						path='/email-marketing-3'
						element={<EmailMarketingPage3 />}
					/>
					<Route
						path='/email-marketing-4'
						element={<EmailMarketingPage4 />}
					/>

					<Route
						path='/cold-calling-1'
						element={<ColdCallingPage1 />}
					/>
					<Route
						path='/cold-calling-2'
						element={<ColdCallingPage2 />}
					/>
					<Route
						path='/cold-calling-3'
						element={<ColdCallingPage3 />}
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
