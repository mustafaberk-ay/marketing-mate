import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';
import phoneImage from '/phone.png';

function ColdCallingPage3() {
	const { isAuthenticated } = useAuth0();

	function makeCallButtonOnClick(){
		console.log('makeCallButtonOnClick')
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='flex flex-col space-y-4 pl-10 pr-10 pt-2'>
						<div className='font-semibold text-white text-center text-5xl'>
							Cold Calling
						</div>

						<div className='text-white text-3xl '>Step 3: Make a Call</div>

						<div className='text-lightBrown text-center text-2xl pt-10'>
							Enter your sales assistant’s phone number. <br/> The potential client
							will be redirected to that phone number.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-20 font-extrabold '>
								Sales Assistant's Phone Number:
							</label>
							<input
								type='tel'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl pt-10'>
							Enter your client’s phone number.
						</div>

						<div className='flex space-x-8 justify-center'>
							<label className='text-white text-5xl mr-72 font-extrabold '>
								Client's Phone Number:
							</label>
							<input
								type='tel'
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-1/3 text-2xl'
							/>
						</div>

						<div className='flex justify-between pt-10'>
							<PrevStepButton prevStepPath='/cold-calling-2' />
							<button
								className='flex justify-around items-center bg-lightBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
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
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default ColdCallingPage3;
