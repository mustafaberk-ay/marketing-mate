import { useEffect } from 'react';
import { FBAuthResponse } from '../type';
import { Link } from 'react-router-dom';

interface MetaSetupPageProps {
	facebookUserAccessToken: string;
	setFacebookUserAccessToken: React.Dispatch<React.SetStateAction<string>>;
}

const MetaSetupPage: React.FC<MetaSetupPageProps> = ({
	facebookUserAccessToken,
	setFacebookUserAccessToken,
}) => {
	useEffect(() => {
		window.FB.getLoginStatus((response: { authResponse?: FBAuthResponse }) => {
			setFacebookUserAccessToken(response.authResponse?.accessToken || '');
		});
	}, []);

	const logInToFB = () => {
		window.FB.login(
			(response: { authResponse?: FBAuthResponse }) => {
				setFacebookUserAccessToken(response.authResponse?.accessToken || '');
			},
			{
				scope:
					'instagram_basic,pages_show_list,pages_manage_engagement,pages_manage_posts,pages_read_engagement,business_management,instagram_content_publish',
			}
		);
	};

	return (
		<div>
			<h1>Step 1: Facebook and Instagram Setup</h1>
			<h3>Login with Facebook</h3>
			{facebookUserAccessToken ? (
				<p>Facebook User Access Token is received successfully.</p>
			) : (
				<p>Facebook User Access Token does not exist.</p>
			)}
			<button onClick={logInToFB}>Login with Facebook</button>
			<br />
			<Link to='/'>Quit</Link>
			<br />
			<Link to='/gmail-setup-page'>Next</Link>
		</div>
	);
};

export default MetaSetupPage;
