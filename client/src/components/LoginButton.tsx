import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<button
			className="bg-lightBrown text-white py-2 px-4 rounded-50 w-56 h-20 text-3xl transition-transform hover:scale-110"
			onClick={() => loginWithRedirect()}
		>
			Login
		</button>
	);
};

export default LoginButton;
