import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
import RegisterButton from '../components/RegisterButton';

interface WelcomePageProps {
	isSetupCompleted: boolean;
	token: string;
	setToken: React.Dispatch<React.SetStateAction<string>>;
	setUserId: React.Dispatch<React.SetStateAction<string>>;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
	isSetupCompleted,
	token,
	setToken,
	setUserId
}) => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();

	useEffect(() => {
		const getToken = async () => {
			try {
				const accessToken = await getAccessTokenSilently({
					authorizationParams: {
						audience: import.meta.env.VITE_API_AUDIENCE,
						scope: 'read:current_user',
					},
				});
				setToken(accessToken);
			} catch (e) {
				console.error(e);
			}
		};

		if (isAuthenticated && user?.sub) {
			getToken();
			setUserId(user.sub)
		}
	}, [isAuthenticated, getAccessTokenSilently]);

	return (
		<div>
			{isSetupCompleted ? <h3>Setup Completed Already</h3> : ''}
			<button>
				<Link to='/meta-setup-page'>Start Setup</Link>
			</button>
			<br />

			{token !== '' ? (
				<div>
					<button>
						<Link to='/profile-page'>Your Profile</Link>
					</button>
					<br />
					<LogoutButton />
				</div>
			) : (
				<div>
					<RegisterButton />
					<LoginButton />
				</div>
			)}
		</div>
	);
};

export default WelcomePage;
