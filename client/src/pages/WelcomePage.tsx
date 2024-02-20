import { Link } from 'react-router-dom';
import LoginButton from '../components/LoginButton';

interface WelcomePageProps {
	isSetupCompleted: boolean;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ isSetupCompleted }) => {
	return (
		<div>
			{isSetupCompleted ? <h3>Setup Completed Already</h3> : ''}
			<button>
				<Link to='/meta-setup-page'>Start Setup</Link>
			</button>
			<br />
			{/* <button onClick={loginButtonOnClick}>Login</button> */}
			<br/>
			<button><Link to='/profile-page'>Your Profile</Link></button>
			<LoginButton />
		</div>
	);

	function loginButtonOnClick() {
		window.open('http://localhost:3000/login', '_self');
	}
};

export default WelcomePage;
