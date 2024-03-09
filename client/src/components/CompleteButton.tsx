import { Link } from 'react-router-dom';
import completeImage from '/complete.png'

function CompleteButton() {
	return (
		<div>
			<Link
				className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
				to='/home-page'
			>
				<img
					className='h-8'
					src={completeImage}
				/>
				Complete
			</Link>
		</div>
	);
}

export default CompleteButton;
