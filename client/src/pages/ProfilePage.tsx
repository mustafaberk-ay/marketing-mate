import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

interface ProfilePageProps {
	token: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ token }) => {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	// const info = user?.sub?.split('|');
	// const platform = info?.at(0);
	// const uid = info?.at(1);

	return (
		isAuthenticated && user && (
			<div>
				<img
					src={user.picture}
					alt={user.name}
				/>
				<h2>{user.name}</h2>
				<p>{user.email}</p>
				<p>{user.sub}</p>
				<p>{token}</p>
				<Link to='/'>Go Back</Link>
			</div>
		)
	);
};

export default ProfilePage;
