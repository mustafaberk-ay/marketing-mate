import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import initFacebookSDK from './utils/initFacebookSDK.ts';
import { Auth0Provider } from '@auth0/auth0-react';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';
import "./index.css"

const renderApp = (): void => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<BrowserRouter>
				<Auth0Provider
					domain='dev-i5pphm8b3pi7nmbn.us.auth0.com'
					clientId='DFwsX4CJdmwcUH9GnoyRjK1mteNvxKDM'
					authorizationParams={{
						redirect_uri: window.location.origin,
						audience: 'https://dev-i5pphm8b3pi7nmbn.us.auth0.com/api/v2/',
						scope: 'read:current_user update:current_user_metadata',
					}}
				>
					<Provider store={store}>
						<App />
					</Provider>
				</Auth0Provider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

initFacebookSDK().then(() => {
	renderApp();
});
