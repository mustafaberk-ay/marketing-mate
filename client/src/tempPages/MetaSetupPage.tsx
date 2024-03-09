import { useEffect } from 'react';
import { FBAuthResponse } from '../type';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setFacebookUserAccessToken } from '../redux/slices/userInfoSlice';

const MetaSetupPage: React.FC = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state: RootState) => state.user);

	useEffect(() => {
		window.FB.getLoginStatus((response: { authResponse?: FBAuthResponse }) => {
			dispatch(setFacebookUserAccessToken(response.authResponse?.accessToken || ''));
		});
	}, []);

	const logInToFB = () => {
		window.FB.login(
			(response: { authResponse?: FBAuthResponse }) => {
				dispatch(setFacebookUserAccessToken(response.authResponse?.accessToken || ''));
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
			{userInfo.facebookUserAccessToken ? (
				<p>Logged in with Facebook successfully</p>
			) : (
				<p>Not logged in with Facebook yet</p>
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
