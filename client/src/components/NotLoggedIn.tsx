import LoginButton from './LoginButton';
import RegisterButton from './RegisterButton';

function NotLoggedIn() {
	return (
		<div className='items-center'>
			<div className='text-4xl text-white text-center mt-10'>Login Failed!</div>
			<div className='text-3xl text-lightBrown text-center mt-24'>
				Please login or register first.
			</div>
			<div className='flex flex-col space-y-8 items-center mt-32'>
				<LoginButton />
				<RegisterButton />
			</div>
		</div>
	);
}

export default NotLoggedIn;
