import { Link } from 'react-router-dom';
import nextImage from '/next.png';

interface NextStepButtonProps {
	nextStepPath: string;
}

const NextStepButton: React.FC<NextStepButtonProps> = ({ nextStepPath }) => {
	return (
		<div>
			<Link
				className='bg-darkBrown items-center text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110 flex justify-around'
				to={nextStepPath}
			>
				Next Step
				<img
					className='h-8'
					src={nextImage}
				/>
			</Link>
		</div>
	);
};

export default NextStepButton;
