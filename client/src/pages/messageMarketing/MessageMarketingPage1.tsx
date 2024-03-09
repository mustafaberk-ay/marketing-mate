import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import GoHomePageButton from '../../components/GoHomePageButton';
import NextStepButton from '../../components/NextStepButton';

function MessageMarketingPage1() {
	const { isAuthenticated } = useAuth0();

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
							Step 1: Product and Message Details
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-28 font-extrabold'>
								Product Name:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 px-2 text-2xl'
								wrap='soft'
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl font-extrabold mr-2'>
								Product's Features:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-16 font-extrabold'>
								Target Audience:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-32 font-extrabold'>
								Content Tone:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-3xl'>
								Would you like an AI-generated image?
							</label>
							<input
								type='checkbox'
								className='form-checkbox h-6 w-6'
							/>
						</div>

						<div className='flex justify-between'>
							<GoHomePageButton />
							<NextStepButton nextStepPath='/message-marketing-2' />
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

export default MessageMarketingPage1