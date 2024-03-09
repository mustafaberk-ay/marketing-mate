import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import loginImage from '/login.png';
import shareImage from '/share.png';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';

function MessageMarketingPage4() {
	const { isAuthenticated } = useAuth0();

	function sendMessageButtonOnClick() {
		console.log('sendMessageButtonOnClick');
	}

	function setupWhatsappButtonOnClick() {
		console.log('setupWhatsappButtonOnClick');
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

						<div className='text-white text-3xl '>Step 4: Send Message</div>

						<div className='text-lightBrown text-center text-2xl'>
							Enter the name of the contact, you would like to send your
							marketing message.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-16 font-extrabold'>
								Contact Name:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/5 text-2xl'
								wrap='soft'
							></textarea>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							You need to setup WhatsApp before sending a message
						</div>

						<div className='flex justify-center space-x-28'>
							<button
								className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={setupWhatsappButtonOnClick}
							>
								<img
									className='h-8'
									src={loginImage}
								/>
								Setup WhatsApp
							</button>
							<button
								className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={sendMessageButtonOnClick}
							>
								<img
									className='h-8'
									src={shareImage}
								/>
								Send Message
							</button>
						</div>
						<div className='flex justify-between'>
							<PrevStepButton prevStepPath='/message-marketing-3' />
							<CompleteButton />
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

export default MessageMarketingPage4;
