import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedIn from '../../components/NotLoggedIn';
import Navbar from '../../components/Navbar';
import bottleImage from '/bottle.png';
import generateImage from '/generate.png';
import PrevStepButton from '../../components/PrevStepButton';
import NextStepButton from '../../components/NextStepButton';

function MessageMarketingPage3() {
	const { isAuthenticated } = useAuth0();

	function generateButtonOnClick() {
		console.log('generate button clicked');
	}
	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />

					<div className='flex flex-col space-y-4 pl-10 pr-10 pt-2'>
						<div className='flex justify-between'>
							<div className='text-white text-3xl mt-2'>
								Step 3: Image Generation
							</div>
							<div className='font-semibold mr-80 text-white text-center text-5xl'>
								Message Marketing
							</div>
							<div></div>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							It is <b className='underline italic'>optional</b> but effective
							to input the image details you would like.
						</div>

						<div className='flex justify-around'>
							<label className='text-white text-5xl font-bold'>
								Image Details:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 px-2 text-2xl'
								wrap='soft'
							></textarea>
							<div className='flex items-center space-x-8 bg-lightBrown p-5 rounded-50'>
								<div className='space-x-2'>
									<input
										type='radio'
										defaultChecked
										name='style'
										className='form-radio h-5 w-5'
									/>
									<label className='text-white'>Vivid</label>
								</div>

								<div className='space-x-2'>
									<input
										type='radio'
										name='style'
										className='form-radio h-5 w-5'
									/>
									<label className='text-white'>Natural</label>
								</div>
							</div>
						</div>
						<div className='flex justify-center'>
							<img
								className='h-80'
								src={bottleImage}
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							If you are pleased with the current generated image, click on
							"Next Step".
						</div>

						<div className='flex justify-between pt-5'>
							<PrevStepButton prevStepPath='/message-marketing-2' />
							<button
								onClick={generateButtonOnClick}
								className='flex items-center justify-around bg-lightBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
							>
								<img
									className='h-8'
									src={generateImage}
								/>
								Generate Image
							</button>
							<NextStepButton nextStepPath='/message-marketing-4' />
						</div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default MessageMarketingPage3;
