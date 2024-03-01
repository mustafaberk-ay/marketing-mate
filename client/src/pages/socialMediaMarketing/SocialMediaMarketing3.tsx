import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedIn from '../../components/NotLoggedIn';
import Navbar from '../../components/Navbar';
import bottleImage from '/bottle.png';
import generateImage from '/generate.png';
import PrevStepButton from '../../components/PrevStepButton';
import NextStepButton from '../../components/NextStepButton';

function SocialMediaMarketingPage3() {
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
						<div className='font-semibold text-white text-center text-5xl'>
							Social Media Marketing
						</div>

						<div className='text-white text-3xl '>Step 3: Image Generation</div>
						<div className='flex justify-center'>
							<img
								className='h-80'
								src={bottleImage}
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							If you don’t like this image, click “Generate Again”. Otherwise,
							continue with the “Next Step”.
						</div>

						<div className='flex justify-between pt-5'>
							<PrevStepButton prevStepPath='/social-media-marketing-2' />
							<button
								onClick={generateButtonOnClick}
								className='flex items-center justify-around bg-lightBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
							>
								<img
									className='h-8'
									src={generateImage}
								/>
								Generate Again
							</button>
							<NextStepButton nextStepPath='/social-media-marketing-4' />
						</div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default SocialMediaMarketingPage3;
