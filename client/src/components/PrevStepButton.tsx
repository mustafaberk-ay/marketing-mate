import { Link } from 'react-router-dom';
import prevImage from '/prev.png';

interface PrevStepButtonProps {
	prevStepPath: string;
}

const PrevStepButton: React.FC<PrevStepButtonProps> = ({ prevStepPath }) => {
	return (
		<div>
			<Link
				className='flex items-center justify-around bg-darkBrown text-white  rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
				to={prevStepPath}
			>
				<img
					className='h-8'
					src={prevImage}
				/>
				Previous Step
			</Link>
		</div>
	);
};

export default PrevStepButton;
