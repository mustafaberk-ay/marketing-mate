import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const ProfilePage: React.FC = () => {
	const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
		useAuth0();
	const [token, setToken] = useState('');

	useEffect(() => {
        const getToken = async () => {
            try {
                // The audience and scope need to match your Auth0 API settings
                const accessToken = await getAccessTokenSilently();
                setToken(accessToken);
            } catch (e) {
                console.error(e);
            }
        };

        if (isAuthenticated) {
            getToken();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const info = user?.sub?.split('|');
	const platform = info?.at(0);
	const uid = info?.at(1);

	return isAuthenticated && user ? (
		<div>
			<p>{user.email}</p>
			<p>{platform}</p>
			<p>{uid}</p>
			<p>{token}</p>
			<Link to='/'>Go Back</Link>
		</div>
	) : (
		<div>
			<p>Not logged in yet</p>
			<Link to='/'>Go Back</Link>
		</div>
	);
};

export default ProfilePage;
