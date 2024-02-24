import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import RegisterButton from '../components/RegisterButton';
import {
	setIsUserInfoExists,
	setToken,
	setUserId,
} from '../redux/slices/userInfoSlice';
import { RootState } from '../redux/store';

const WelcomePage: React.FC = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state: RootState) => state.user);

	const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

	useEffect(() => {
		const getToken = async () => {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: import.meta.env.VITE_API_AUDIENCE,
						scope: 'read:current_user',
					},
				});
				dispatch(setToken(accessToken));
			} catch (e) {
				console.error(e);
			}
		};

		const checkIsUserInfoExists = async () => {
			try {
				await fetch('http://localhost:3000/user-info/isUserInfoExists', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ id: userInfo.userId }),
				})
					.then((response) => {
						if (!response.ok) {
							throw new Error('Network response was not ok');
						}
						return response.json();
					})
					.then((data: boolean) => {
						//maybe bc data is interpreted as a string
						//so it doesn't setIsUserInfoExists to true or false
						dispatch(setIsUserInfoExists(data));
					})
					.catch((error) => {
						console.error(
							'There was a problem with your fetch operation:',
							error
						);
					});
			} catch (error) {
				console.error(error);
			}
		};

		if (isAuthenticated && user?.sub) {
			getToken();
			dispatch(setUserId(user.sub));
			checkIsUserInfoExists();
		}
	}, [isAuthenticated, getAccessTokenSilently, userInfo.token]);

	//console.log(userInfo.userId, 'uid');

	return (
		<div>
			{userInfo.isSetupCompleted ? <h3>Setup Completed Already</h3> : ''}
			<button>
				<Link to='/meta-setup-page'>Start Setup</Link>
			</button>
			<br />

			{userInfo.token !== '' ? (
				//if user is logged in
				<div>
					{userInfo.isUserInfoExists ? (
						//if user completed profile setup
						<button>
							<Link to='/profile-page'>Your Profile</Link>
						</button>
					) : (
						//if user is logged in but not complete
						''
					)}

					<br />
					<LogoutButton />
				</div>
			) : (
				//if user is not logged in
				<div>
					<RegisterButton />
					<LoginButton />
				</div>
			)}
		</div>
	);
};

export default WelcomePage;
