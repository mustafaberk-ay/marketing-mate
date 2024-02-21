import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserInfo } from '../type';
import { decryptData } from '../utils/encryptionUtils';

interface ProfilePageProps {
	token: string;
	userId: string;
}

const ProfilePage: React.FC<ProfilePageProps> = ({ token, userId }) => {
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
	const { user, isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		async function getUserInfo() {
			await fetch('http://localhost:3000/user-info/getUserInfoById', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ id: userId }),
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then((data) => {
					setUserInfo(data)
					console.log(data, 'data');
				})
				.catch((error) => {
					console.error(
						'There was a problem with your fetch operation:',
						error
					);
				});
		}

		getUserInfo();
	});

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	// const info = user?.sub?.split('|');
	// const platform = info?.at(0);
	// const uid = info?.at(1);

	return (
		userInfo && (
			<div>
				<p>ID: {userInfo._id}</p>
				<p>Facebook Token: {userInfo.facebook_user_access_token}</p>
				<p>Gmail Address: {userInfo.gmail_address}</p>
				<p>Gmail App Password: {userInfo.gmail_app_password}</p>
				<p>Assistant Phone Number: {decryptData(userInfo.assistant_phone_number) }</p>
				<Link to='/'>Go Back</Link>
			</div>
		)
	);
};

export default ProfilePage;
