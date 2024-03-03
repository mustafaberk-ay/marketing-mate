import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';
import shareImage from '/share.png';

function EmailMarketingPage4() {
	const { isAuthenticated } = useAuth0();

	function sendMessageButtonOnClick(){
		console.log('sendMessageButtonOnClick')
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />

					<div className='flex flex-col space-y-4 pl-10 pr-10 pt-2'>
						<div className='font-semibold text-white text-center text-5xl'>
							Email Marketing
						</div>

						<div className='text-white text-3xl '>Step 4: Send Email</div>

						<div className='text-lightBrown text-center text-2xl pt-10'>
							Enter the sender’s Gmail Address and Gmail App Password.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-52 font-extrabold '>
								Sender's Gmail Address:
							</label>
							<input
								type='text'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-16 font-extrabold'>
								Sender's Gmail App Password:
							</label>
							<input
								type='password'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl pt-10'>
							Enter the receiver’s Gmail address
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-44 font-extrabold '>
								Receiver's Gmail Address:
							</label>
							<input
								type='text'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='flex justify-between pt-9'>
							<PrevStepButton prevStepPath='/email-marketing-3' />
							<button
								className='flex justify-around items-center bg-lightBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={sendMessageButtonOnClick}
							>
								<img
									className='h-8'
									src={shareImage}
								/>
								Send Message
							</button>
							<CompleteButton />
						</div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default EmailMarketingPage4;
