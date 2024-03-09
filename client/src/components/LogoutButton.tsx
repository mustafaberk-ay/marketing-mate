import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout } = useAuth0();

	return (
		<button
			className='bg-darkBrown text-white px-4 rounded-50 w-56 h-20 text-3xl transition-transform hover:scale-110'
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
			}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
