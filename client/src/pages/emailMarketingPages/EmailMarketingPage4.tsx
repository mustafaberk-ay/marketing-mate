import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';
import shareImage from '/share.png';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

interface PostData {
	sender: string;
	to: string;
	message: string;
	subject: string;
	appPassword: string;
}

function EmailMarketingPage4() {
	const { isAuthenticated } = useAuth0();
	const productInfo = useSelector((state: RootState) => state.productDetails);

	const [senderGmailAddress, setSenderGmailAddress] = useState<string>('');
	const [senderAppPassword, setSenderAppPassword] = useState<string>('');
	const [receiverEmailAddress, setReceiverEmailAddress] = useState<string>('');

	function senderGmailAddressInputOnChange(
		e: React.ChangeEvent<HTMLInputElement>
	) {
		setSenderGmailAddress(e.target.value);
	}

	function senderAppPasswordInputOnChange(
		e: React.ChangeEvent<HTMLInputElement>
	) {
		setSenderAppPassword(e.target.value);
	}

	function receiverEmailAddressInputOnChange(
		e: React.ChangeEvent<HTMLInputElement>
	) {
		setReceiverEmailAddress(e.target.value);
	}

	async function sendMessageButtonOnClick() {
		console.log('sendMessageButtonOnClick');

		const postData: PostData = {
			to: receiverEmailAddress,
			sender: senderGmailAddress,
			message: productInfo.generatedContent,
			subject: productInfo.productName, 
			appPassword: senderAppPassword
		}

		const res = await fetch('http://localhost:3000/gmailEmail/sendGmailEmail', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		})

		console.log(await res.json())
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />

					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='font-semibold text-white text-center text-5xl'>
							Email Marketing
						</div>

						<div className='text-white text-3xl '>Step 4: Send Email</div>

						<div className='text-lightBrown text-center text-2xl'>
							Enter the sender’s Gmail Address and Gmail App Password.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-52 font-extrabold '>
								Sender's Gmail Address:
							</label>
							<input
								type='text'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
								onChange={senderGmailAddressInputOnChange}
							/>
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-16 font-extrabold'>
								Sender's Gmail App Password:
							</label>
							<input
								type='password'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
								onChange={senderAppPasswordInputOnChange}
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							Enter the receiver’s Gmail address
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-44 font-extrabold '>
								Receiver's Email Address:
							</label>
							<input
								type='text'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
								onChange={receiverEmailAddressInputOnChange}
							/>
						</div>

						<div className='flex justify-between'>
							{productInfo.isRequestedImage ? (
								<PrevStepButton prevStepPath='/email-marketing-3' />
							) : (
								<PrevStepButton prevStepPath='/email-marketing-2' />
							)}
							<button
								className='flex justify-around items-center bg-lightBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={sendMessageButtonOnClick}
							>
								<img
									className='h-8'
									src={shareImage}
								/>
								Send Email
							</button>
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

export default EmailMarketingPage4;
