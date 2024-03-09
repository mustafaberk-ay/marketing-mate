import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';
import phoneImage from '/phone.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useState } from 'react';

interface PostData {
	clientPhoneNumber: string;
	assistantPhoneNumber: string;
	productName: string;
	productScript: string;
}

function ColdCallingPage3() {
	const { isAuthenticated } = useAuth0();
	const productInfo = useSelector((state: RootState) => state.productDetails);
	const [salesAssistantPhoneNumber, setSalesAssistantPhoneNumber] =
		useState<string>('');
	const [clientPhoneNumber, setClientPhoneNumber] = useState<string>('');

	function assistantNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSalesAssistantPhoneNumber(e.target.value);
	}

	function clientNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setClientPhoneNumber(e.target.value);
	}

	async function makeCallButtonOnClick() {
		console.log('makeCallButtonOnClick');

		const postData: PostData = {
			clientPhoneNumber: clientPhoneNumber,
			assistantPhoneNumber: salesAssistantPhoneNumber,
			productName: productInfo.productName,
			productScript: productInfo.generatedContent,
		};

		console.log(postData, 'postData')

		const res = await fetch('http://localhost:3000/phoneCall/createCall', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		});

		const responseData = await res.json();
		console.log(responseData, 'responseData');
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='font-semibold text-white text-center text-5xl'>
							Cold Calling
						</div>

						<div className='text-white text-3xl '>Step 3: Make a Call</div>

						<div className='text-lightBrown text-center text-2xl'>
							Enter your sales assistant’s phone number. <br /> The potential
							client will be redirected to that phone number.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-20 font-extrabold '>
								Sales Assistant's Phone Number:
							</label>
							<input
								onChange={assistantNumberOnChange}
								type='tel'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							Enter your client’s phone number.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-72 font-extrabold '>
								Client's Phone Number:
							</label>
							<input
								onChange={clientNumberOnChange}
								type='tel'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='flex justify-between'>
							<PrevStepButton prevStepPath='/cold-calling-2' />
							<button
								className='flex justify-around items-center bg-lightBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={makeCallButtonOnClick}
							>
								<img
									className='h-8'
									src={phoneImage}
								/>
								Make a Call
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

export default ColdCallingPage3;
