import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserInfo } from '../type';
import { decryptData } from '../utils/encryptionUtils';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const ProfilePage: React.FC = () => {
	const userInfo = useSelector((state: RootState) => state.user);

	const [userInfoData, setUserInfoData] = useState<UserInfo | null>(null);
	const { user, isAuthenticated, isLoading } = useAuth0();

	useEffect(() => {
		async function getUserInfo() {
			await fetch('http://localhost:3000/user-info/getUserInfoById', {
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
				.then((data) => {
					setUserInfoData(data);
				})
				.catch((error) => {
					console.error(
						'There was a problem with your fetch operation:',
						error
					);
				});
		}

		getUserInfo();
	}, [userInfo.userId]);

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	// const info = user?.sub?.split('|');
	// const platform = info?.at(0);
	// const uid = info?.at(1);

	return (
		userInfoData && (
			<div>
				<p>ID: {userInfoData._id}</p>
				<p>
					Facebook Token: {decryptData(userInfoData.facebook_user_access_token)}
				</p>
				<p>Gmail Address: {decryptData(userInfoData.gmail_address)}</p>
				<p>
					Gmail App Password: {decryptData(userInfoData.gmail_app_password)}
				</p>
				<p>
					Assistant Phone Number:{' '}
					{decryptData(userInfoData.assistant_phone_number)}
				</p>
				<Link to='/'>Go Back</Link>
			</div>
		)
	);
};

export default ProfilePage;
