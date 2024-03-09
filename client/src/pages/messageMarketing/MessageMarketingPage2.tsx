import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import NextStepButton from '../../components/NextStepButton';
import generateImage from '/generate.png';

function MessageMarketingPage2() {
	const { isAuthenticated } = useAuth0();

	function generateButtonOnClick() {
		console.log('generate button clicked');
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />

					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='font-semibold text-white text-center text-5xl'>
							Message Marketing
						</div>

						<div className='text-white text-3xl '>
							Step 2: Message Generation
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl font-extrabold mr-2'>
								Generated Message:
							</label>
							<textarea
								className='border-4 border-darkBrown h-64 rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl bg-darkBlue text-white mb-10'
								wrap='soft'
								defaultValue='Waiting for the generated content'
							></textarea>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							If you don’t like this message, click “Generate Again” or edit the
							text above. Otherwise, continue with the “Next Step”.
						</div>

						<div className='flex justify-between'>
							<PrevStepButton prevStepPath='/message-marketing-1' />
							<button
								onClick={generateButtonOnClick}
								className='flex items-center justify-around bg-lightBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
							>
								<img
									className='h-8'
									src={generateImage}
								/>
								Generate Again
							</button>
							<NextStepButton nextStepPath='/message-marketing-3' />
						</div>
						<div></div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default MessageMarketingPage2;
