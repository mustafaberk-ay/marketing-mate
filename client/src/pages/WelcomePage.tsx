import { Link } from 'react-router-dom';

interface WelcomePageProps {
	isSetupCompleted: boolean;
}

const WelcomePage: React.FC<WelcomePageProps> = ({
	isSetupCompleted
}) => {
	return (
		<div>
			{isSetupCompleted ? <h3>Setup Completed Already</h3> : ''}
			<Link to='/meta-setup-page'>Start Setup</Link>
		</div>
	);
}

export default WelcomePage;
