import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import initFacebookSDK from './utils/initFacebookSDK.ts';

const renderApp = (): void => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
};

initFacebookSDK().then(() => {
	renderApp();
	console.log('initialized facebook sdk');
});
