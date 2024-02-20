import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import initFacebookSDK from './utils/initFacebookSDK.ts';
import { Auth0Provider } from '@auth0/auth0-react';

const renderApp = (): void => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<BrowserRouter>
				<Auth0Provider
					domain='dev-i5pphm8b3pi7nmbn.us.auth0.com'
					clientId='DFwsX4CJdmwcUH9GnoyRjK1mteNvxKDM'
					authorizationParams={{
						redirect_uri: window.location.origin,
					}}
				>
					<App />
				</Auth0Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

initFacebookSDK().then(() => {
	renderApp();
	console.log('initialized facebook sdk');
});
