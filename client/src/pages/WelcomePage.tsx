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
			<div className='w-full bg-darkBrown h-16 rounded-15'>
				<p className='text-center text-white font-extrabold text-9xl'>
					Marketing Mate
				</p>
			</div>
			<p className='text-center text-lightBrown text-4xl mt-32'>
				Your AI-Based Marketing Assistant
			</p>

			{userInfo.token !== '' ? (
				<div className='flex flex-col items-center mt-10 space-y-8'>
					<button className='bg-lightBrown text-white py-2 px-4 rounded-50 w-56 h-20 text-3xl transition-transform hover:scale-110'>
						<Link to='/home-page'>Get Started</Link>
					</button>
					<LogoutButton />
				</div>
			) : (
				<div className='flex flex-col space-y-8 items-center mt-10'>
					<LoginButton />
					<RegisterButton />
				</div>
			)}

			<p className='text-lightBrown text-center mt-10 text-3xl'>
				Join us to unleash your product’s potential!
			</p>

			{/* {userInfo.isSetupCompleted ? <h3>Setup Completed Already</h3> : ''}
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
			)} */}
		</div>
	);
};

export default WelcomePage;
